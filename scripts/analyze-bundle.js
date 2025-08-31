#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🔍 Starting bundle analysis...\n");

// Build the project with bundle analysis
try {
  console.log("📦 Building project with bundle analyzer...");
  execSync("ANALYZE=true npm run build", { stdio: "inherit" });

  console.log("\n✅ Bundle analysis complete!");
  console.log("📊 Check bundle-analyzer-report.html for detailed analysis");
} catch (error) {
  console.error("❌ Bundle analysis failed:", error.message);
  process.exit(1);
}

// Analyze build output
const buildDir = path.join(__dirname, "../.next");
if (fs.existsSync(buildDir)) {
  console.log("\n📈 Build Statistics:");

  // Get static files
  const staticDir = path.join(buildDir, "static");
  if (fs.existsSync(staticDir)) {
    const getDirectorySize = (dirPath) => {
      let totalSize = 0;
      const files = fs.readdirSync(dirPath, { withFileTypes: true });

      for (const file of files) {
        const filePath = path.join(dirPath, file.name);
        if (file.isDirectory()) {
          totalSize += getDirectorySize(filePath);
        } else {
          totalSize += fs.statSync(filePath).size;
        }
      }
      return totalSize;
    };

    const formatBytes = (bytes) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    const totalSize = getDirectorySize(staticDir);
    console.log(`📁 Total static assets size: ${formatBytes(totalSize)}`);

    // Analyze chunks
    const chunksDir = path.join(staticDir, "chunks");
    if (fs.existsSync(chunksDir)) {
      const chunksSize = getDirectorySize(chunksDir);
      console.log(`🧩 JavaScript chunks size: ${formatBytes(chunksSize)}`);
    }

    // Analyze CSS
    const cssDir = path.join(staticDir, "css");
    if (fs.existsSync(cssDir)) {
      const cssSize = getDirectorySize(cssDir);
      console.log(`🎨 CSS files size: ${formatBytes(cssSize)}`);
    }
  }
}

console.log("\n🚀 Performance Tips:");
console.log("1. Keep JavaScript bundles under 250KB");
console.log("2. Optimize images with WebP/AVIF formats");
console.log("3. Use dynamic imports for code splitting");
console.log("4. Enable compression in production");
console.log("5. Monitor Core Web Vitals regularly");

console.log("\n📋 Next Steps:");
console.log("1. Run: npm run dev to test performance locally");
console.log("2. Use Lighthouse to audit performance");
console.log("3. Monitor bundle size changes in CI/CD");
console.log("4. Consider using a CDN for static assets");
