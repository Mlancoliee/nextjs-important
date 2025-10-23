const fs = require('fs');


const dirPath = './edge-functions';
const files = fs.readdirSync(dirPath);
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
          this.readIndexFiles(filePath);
        } else if (/\.(ts|js|cjs|tsx|jsx)$/.test(file)) {
          const originalText = fs.readFileSync(filePath, 'utf-8');
        }
      }

console.log(files);
