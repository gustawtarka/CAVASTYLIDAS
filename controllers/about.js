import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folderPath = path.join(__dirname, '../public/images/aboutImages');

let filePaths = [];
try {
  filePaths = fs.readdirSync(folderPath)
    .filter(file => fs.statSync(path.join(folderPath, file)).isFile())
    .map(file => `/images/aboutImages/${file}`); // <-- Web path, not absolute path
} catch (err) {
  console.warn(`Warning: Failed to read folder "${folderPath}":`, err.message);
}

console.log(filePaths);

const about = {
  createView(request, response) {
    const viewData = {
      imagePaths: filePaths,
    };
    response.render('about', viewData);
  },
};

export default about;
