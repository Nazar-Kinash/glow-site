<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$h = $_SERVER['HTTP_HOST'];
if ($h === 'localhost:8000') {
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST');  
  header("Access-Control-Allow-Headers: *");
}

$res = formHandler();

echo $res;
die();

function pipeUrl($path) {
  $company_domain = 'glow-cdac99';
  $api_token = '418d3e3b3508c377a04b54e502d5868aa79f61ef';
  
  return 'https://'.$company_domain.'.pipedrive.com/v1/'.$path.'?api_token='.$api_token;
}

function get($key) {
  return isset($_GET[$key]) ? $_GET[$key] : null;
}

function post($key, $default = null) {
  return isset($_POST[$key]) ? $_POST[$key] : $default;
}

function formHandler() {
  $name = post('name');
  // $company_name = post('company_name');
  $project = implode(", ", post('services', []));
  $project_about = post('project-about');
  $budget = post('budget');
  $email = post('email');
  //honeypot
  $phonenumber = post('phonenumber');

  $contactResponse = request_post(pipeUrl('persons'), [
    'name' => $name,
    'email' => $email,
  ]);
  $contact = json_decode($contactResponse, true);

  $contactId = (int)$contact['data']['id'];
  if (empty($contactId)) {
    json_respond([
      'status' => 'error',
      'cause' => 'contact id',
    ]);
  }

  $dealResponse = request_post(pipeUrl('deals'), [
    'title' => 'Deal for '.$email.' created at '.date('d-m-Y H:i'),
    'person_id' => $contactId,
    'bd0449a7ade1fa104321ebfe32832776893aba00' => $budget,
    'dcd8f5c002e8a113ae120c6b678939ae1f2ef26a' => $project . '; ' . $project_about,
    'add_time' => date('Y-m-d H:i:s'),
  ]);

  $deal = json_decode($dealResponse, true);

  $dealId = (int)$deal['data']['id'];
  if (empty($dealId)) {
    json_respond([
      'status' => 'error',
      'cause' => 'deal id'
    ]);
  }

  emailNotification();

  json_respond([
    'status' => 'ok'
  ]);
}

function emailNotification() {
  $mailer = new \PHPMailer\PHPMailer\PHPMailer();
  $name = post('name');
  // $company_name = post('company_name');
  $project = implode(", ", post('services', []));
  $project_about = post('project-about');
  $budget = post('budget');
  $email = post('email');
  //honeypot
  $phonenumber = post('phonenumber');
  
  try {
    $mailer->isSMTP();
    $mailer->CharSet = 'UTF-8';
    $mailer->SMTPAuth = true;

    $mailer->Host = 'mail.privateemail.com';
    $mailer->Username = 'hello@glow.team';
    $mailer->Password = '5mKW>4ebgdWM';
    $mailer->Port = 465;
    $mailer->SMTPSecure = 'ssl';
    $mailer->setFrom('hello@glow.team', 'Glow Team');
    // $mailer->addAddress('sergey.bogdan.vi@gmail.com');
    $mailer->addAddress('hello@glow.team');
    $mailer->addAddress('rusmashatov@gmail.com');
    $mailer->addAddress('chr99272@gmail.com');

    $mailer->isHTML(true);
    $mailer->Subject = 'Contact form submission';
    $message = [
      'Name' => $name,
      'Email' => $email,
      'Project Type' => $project,
      'Project About' => $project_about,
      'Budget' => $budget,
    ];
    $msg = '';
    foreach ($message as $key => $value) {
      $msg .= "<b>$key:</b> $value<br><br>";
    }

    $mailer->Body = $msg;

    if ($mailer->send()) {
      return true;
    } else {
      return false;
    }


  } catch (Exception $e) {
    throw $e;
  }
}

function request_post($url, $data) {

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $data);


  $response = curl_exec($ch);
  curl_close($ch);

  return $response;
}

function json_respond($data) {
  header('Content-type: application/json');
  return json_encode($data);
}