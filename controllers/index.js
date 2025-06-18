'use strict';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Needed to use __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const index = {
  createView(request, response) {
    const imagesDir = path.join(__dirname, '..', 'public', 'images');

    fs.readdir(imagesDir, (err, files) => {
      if (err) {
        console.error('Error reading image directory:', err);
        return response.status(500).send('Server error');
      }

      const imageFiles = files.filter(file =>
        /\.(jpg|jpeg|png|gif)$/i.test(file)
      );

      const viewData = { images: imageFiles };
      response.render('index', viewData);
    });
  }
};

export default index;
