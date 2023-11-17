import fs from 'fs/promises';
import path from 'path';

const getDirectories = (source) => {
  return fs.readdir(source, { withFileTypes: true }).then((dirs) => {
    return dirs
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => path.resolve(source, dirent.name));
  });
};

export async function getBlogPosts() {
  const blogFolder = path.resolve(process.cwd(), 'blog');
  const dirs = await getDirectories(blogFolder);

  const posts = await Promise.all(
    dirs.map(async (dir) => {
      const [meta, html] = await Promise.all([
        fs.readFile(path.resolve(dir, 'meta.json')).then((v) => JSON.parse(v)),
        fs
          .readFile(path.resolve(dir, 'index.html'))
          .then((buf) => buf.toString()),
      ]);

      return {
        ...meta.data,
        text: html,
      };
    })
  );

  return posts.sort((a, b) => b.order - a.order);
}

const positionMap = {
  'Kovalsky Stanislav': 'Co-Founder & Lead Designer',
  'Daria Haman': 'HR Manager',
  'Liudmyla Gramatyk': 'Content Manager',
  'Ruslan Mashatov': 'Co-Founder & Lead Designer',
};

export function withAuthor(post) {
  console.log(post.author_name);
  return {
    ...post,
    author_position: positionMap[post.author_name] || 'Product Designer',
    author_name:
      post.author_name === 'Kovalsky Stanislav'
        ? 'Stanislav Kovalsky'
        : post.author_name,
  };
}

export function getPostPreviewData({ text, paragraphs, ...post }) {
  return {
    ...post,
    ...withAuthor(post),
  };
}
