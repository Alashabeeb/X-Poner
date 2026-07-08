const { PDFParse } = require('pdf-parse');
const fs = require('fs');

async function main() {
  const buffer = fs.readFileSync('./X-Poner Company Profile.pdf');
  const parser = new PDFParse({ data: buffer });
  const data = await parser.getText();
  console.log(data.text);
}

main().catch(console.error);
