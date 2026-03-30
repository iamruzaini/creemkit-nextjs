const fs = require("fs");

const files = [
  "docs/blueprint-tasks.md",
  "docs/blueprint-requirements.md",
  "docs/blueprint-implementation.md"
];

files.forEach((file) => {
  let content = fs.readFileSync(file, "utf8");

  // Authentication routes
  content = content.replace(/src\/app\/\(auth\)\//g, "app/(auth)/");
  
  // API routes
  content = content.replace(/src\/app\/api\//g, "app/api/");
  
  // Main protected pages
  content = content.replace(/src\/app\/dashboard\//g, "app/(main)/dashboard/");
  content = content.replace(/src\/app\/dashboard\.tsx/g, "app/(main)/dashboard.tsx");
  content = content.replace(/src\/app\/dashboard\/page\.tsx/g, "app/(main)/dashboard/page.tsx");
  content = content.replace(/src\/app\/dashboard\/layout\.tsx/g, "app/(main)/dashboard/layout.tsx");

  // Public pages
  content = content.replace(/src\/app\/pricing\//g, "app/(public)/pricing/");
  content = content.replace(/src\/app\/page\.tsx/g, "app/(public)/page.tsx");
  content = content.replace(/src\/app\/legal\//g, "app/(public)/legal/");
  
  // Root layout/config
  content = content.replace(/src\/app\/layout\.tsx/g, "app/layout.tsx");
  content = content.replace(/src\/app\/globals\.css/g, "app/globals.css");
  content = content.replace(/src\/app\/robots\.ts/g, "app/robots.ts");
  content = content.replace(/src\/app\/sitemap\.ts/g, "app/sitemap.ts");
  
  // Directories
  content = content.replace(/src\/components\//g, "components/");
  content = content.replace(/src\/lib\//g, "lib/");
  
  // Root files
  content = content.replace(/src\/middleware\.ts/g, "middleware.ts");

  fs.writeFileSync(file, content, "utf8");
});

console.log("Updated paths in all 3 docs.");
