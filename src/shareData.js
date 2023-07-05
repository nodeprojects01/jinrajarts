const XLSX = require('xlsx');

function jsonToExcel(data, sheetName, outputFilePath) {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Convert headers to title case and add spaces between words
  const headers = Object.keys(data[0]);
  for (let i = 0; i < headers.length; i++) {
    headers[i] = headers[i]
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before capital letters
      .replace(/_/g, ' '); // Replace underscores with spaces
    headers[i] = headers[i][0].toUpperCase() + headers[i].slice(1); // Convert to title case
  }

  // Insert headers at the beginning of the worksheet
  XLSX.utils.sheet_add_aoa(worksheet, [headers], { origin: 'A1' });

  // Set the header row to bold
  const headerRange = XLSX.utils.decode_range(worksheet['!ref']);
  for (let col = headerRange.s.c; col <= headerRange.e.c; col++) {
    const headerCell = XLSX.utils.encode_cell({ r: 0, c: col });
    worksheet[headerCell].s = { font: { bold: true } };
  }

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  // Write the workbook to the output file
  XLSX.writeFile(workbook, outputFilePath);
}
