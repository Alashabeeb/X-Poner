import fs from 'fs';
import pdfParse from 'pdf-parse';

const pdfBuffer = fs.readFileSync('./X-Poner Company Profile.pdf');

pdfParse(pdfBuffer).then(data => {
  console.log('=== PDF TEXT CONTENT ===');
  console.log('Pages:', data.numpages);
  console.log('---');
  console.log(data.text);
}).catch(err => {
  console.error('Error:', err.message);
});
