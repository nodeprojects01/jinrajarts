const XLSX = require('xlsx');

function jsonToExcel(data, sheetName, outputFilePath) {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet([[]]); // Create an empty worksheet

  // Convert headers to title case and add spaces between words
  const headers = Object.keys(data[0]);
  for (let i = 0; i < headers.length; i++) {
    headers[i] = headers[i]
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before capital letters
      .replace(/_/g, ' '); // Replace underscores with spaces
    headers[i] = headers[i][0].toUpperCase() + headers[i].slice(1); // Convert to title case
  }

  // Set the header row with bold style
  XLSX.utils.sheet_set_array_formulae(worksheet, [{ ref: 'A1:Z1', formula: headers }]);

  // Add the JSON data starting from the second row
  XLSX.utils.sheet_add_json(worksheet, data, { skipHeader: true, origin: 'A2' });

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  // Write the workbook to the output file
  XLSX.writeFile(workbook, outputFilePath);
}
