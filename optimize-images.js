const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = './img';
const outputDir = './img-optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const fileSizeInMB = stats.size / (1024 * 1024);
    
    console.log(`Processing: ${inputPath} (${fileSizeInMB.toFixed(2)}MB)`);
    
    // For images larger than 500KB, apply more aggressive optimization
    const quality = fileSizeInMB > 0.5 ? 70 : 85;
    
    await sharp(inputPath)
      .resize(1920, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality })
      .toFile(outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      
    // Also create a fallback optimized version
    await sharp(inputPath)
      .resize(1920, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality })
      .toFile(outputPath.replace(/\.(jpg|jpeg|png)$/i, '.jpg'));
      
    const newStats = fs.statSync(outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    const newSizeInMB = newStats.size / (1024 * 1024);
    const savings = ((fileSizeInMB - newSizeInMB) / fileSizeInMB * 100).toFixed(2);
    
    console.log(`✓ Optimized: ${newSizeInMB.toFixed(2)}MB (${savings}% smaller)`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error.message);
  }
}

async function processImages() {
  const files = fs.readdirSync(imageDir);
  
  for (const file of files) {
    const inputPath = path.join(imageDir, file);
    const outputPath = path.join(outputDir, file);
    
    // Skip directories and non-image files
    if (fs.statSync(inputPath).isDirectory()) continue;
    if (!/\.(jpg|jpeg|png)$/i.test(file)) {
      // Copy non-image files as-is
      fs.copyFileSync(inputPath, outputPath);
      continue;
    }
    
    await optimizeImage(inputPath, outputPath);
  }
  
  console.log('\n✅ Image optimization complete!');
  console.log(`Optimized images are in the '${outputDir}' directory`);
}

processImages().catch(console.error);