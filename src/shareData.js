const XLSX = require('xlsx');

function jsonToExcel(data, sheetName, outputFilePath) {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Convert headers to title case
  const headers = Object.keys(data[0]);
  for (let i = 0; i < headers.length; i++) {
    headers[i] = headers[i][0].toUpperCase() + headers[i].slice(1);
  }

  // Make headers bold
  const headerStyle = { bold: true };
  XLSX.utils.sheet_add_json(worksheet, [{}], { skipHeader: true, origin: 'A1' });
  headers.forEach((header, index) => {
    const cellAddress = XLSX.utils.encode_cell({ r: 0, c: index });
    worksheet[cellAddress].v = header;
    worksheet[cellAddress].s = headerStyle;
  });

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  // Write the workbook to the output file
  XLSX.writeFile(workbook, outputFilePath);
}
