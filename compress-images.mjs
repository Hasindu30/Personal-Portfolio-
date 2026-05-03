import sharp from 'sharp';
import { readdirSync, statSync, renameSync, unlinkSync } from 'fs';
import { join, extname } from 'path';

const assetsDir = './public/assets';
const files = readdirSync(assetsDir);

for (const file of files) {
  const filePath = join(assetsDir, file);
  const tmpPath = filePath + '.tmp';
  const ext = extname(file).toLowerCase();
  const sizeBefore = (statSync(filePath).size / 1024).toFixed(1);

  try {
    if (ext === '.jpeg' || ext === '.jpg') {
      await sharp(filePath)
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(tmpPath);
    } else if (ext === '.png') {
      await sharp(filePath)
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(tmpPath);
    } else {
      console.log(`⏭  Skipping ${file}`);
      continue;
    }

    const sizeAfter = (statSync(tmpPath).size / 1024).toFixed(1);
    unlinkSync(filePath);
    renameSync(tmpPath, filePath);
    console.log(`✓ ${file}: ${sizeBefore}KB → ${sizeAfter}KB (saved ${(sizeBefore - sizeAfter).toFixed(1)}KB)`);
  } catch (err) {
    console.error(`✗ Error on ${file}:`, err.message);
  }
}

console.log('\n✅ Done! All images compressed in-place.');
