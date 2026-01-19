import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const SOURCE_DIR = './public/images/source';
const OUTPUT_DIR = './public/images';

// Define sizes for different image types
const IMAGE_CONFIGS = {
  'tobin-headshot': { sizes: [450, 900], formats: ['avif', 'webp', 'jpg'] },
  pic01: { sizes: [300, 600], formats: ['avif', 'webp', 'jpg'] },
  pic02: { sizes: [300, 600], formats: ['avif', 'webp', 'jpg'] },
  pic03: { sizes: [300, 600], formats: ['avif', 'webp', 'jpg'] },
  bg: { sizes: [800, 1280, 1920], formats: ['avif', 'webp', 'jpg'] },
};

// Default config for images not in the list
const DEFAULT_CONFIG = { sizes: [800], formats: ['avif', 'webp', 'jpg'] };

async function optimizeImage(inputPath, baseName, config) {
  const { sizes, formats } = config;
  const results = [];

  for (const width of sizes) {
    for (const format of formats) {
      const outputName = `${baseName}-${width}.${format}`;
      const outputPath = path.join(OUTPUT_DIR, outputName);

      try {
        let pipeline = sharp(inputPath).resize(width, null, {
          withoutEnlargement: true,
          fit: 'inside',
        });

        // Apply format-specific settings
        switch (format) {
          case 'avif':
            pipeline = pipeline.avif({ quality: 80 });
            break;
          case 'webp':
            pipeline = pipeline.webp({ quality: 85 });
            break;
          case 'jpg':
            pipeline = pipeline.jpeg({ quality: 85, mozjpeg: true });
            break;
        }

        await pipeline.toFile(outputPath);
        results.push(outputName);
      } catch (error) {
        console.error(`Error processing ${outputName}:`, error.message);
      }
    }
  }

  return results;
}

async function main() {
  console.log('Starting image optimization...');

  // Ensure output directory exists
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  // Check if source directory exists
  try {
    await fs.access(SOURCE_DIR);
  } catch {
    console.log('No source images directory found. Skipping optimization.');
    return;
  }

  // Get all images from source directory
  const files = await fs.readdir(SOURCE_DIR);
  const imageFiles = files.filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));

  if (imageFiles.length === 0) {
    console.log('No images found in source directory.');
    return;
  }

  console.log(`Found ${imageFiles.length} images to optimize.`);

  for (const file of imageFiles) {
    const inputPath = path.join(SOURCE_DIR, file);
    const baseName = path.basename(file, path.extname(file));
    const config = IMAGE_CONFIGS[baseName] || DEFAULT_CONFIG;

    console.log(`Processing: ${file}`);
    const results = await optimizeImage(inputPath, baseName, config);
    console.log(`  Generated: ${results.join(', ')}`);
  }

  console.log('Image optimization complete!');
}

main().catch(console.error);
