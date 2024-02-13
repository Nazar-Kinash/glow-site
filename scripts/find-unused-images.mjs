import fs from 'fs/promises';
import path from 'path';
import fg from 'fast-glob';

const run = async () => {
  let images = await fg.glob('(components/**/*.(png|jpg|jpeg))');
  const files = await fg.glob('(components/**/*.js|pages/**/*.js)');

  images = images.map((img) => {
    return {
      originalSrc: img,
      src: img.split('/').at(-1),
      exists: false,
    };
  });

  for (const file of files) {
    const fp = path.join(process.cwd(), file);
    const text = (await fs.readFile(fp)).toString();
    for (const image of images) {
      if (text.includes(image.src)) {
        image.exists = true;
      }
    }
  }

  const filtered = images
    .filter((img) => img.exists)
    .map((img) => img.originalSrc);

  console.log(filtered.length);
  console.log(filtered);
};

run();
