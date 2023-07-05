const ExcelJS = require('exceljs');

async function jsonToExcel(data, sheetName, outputFilePath) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(sheetName);

  // Convert headers to title case and make them bold
  const headers = Object.keys(data[0]);
  for (let i = 0; i < headers.length; i++) {
    headers[i] = headers[i][0].toUpperCase() + headers[i].slice(1);
  }

  const headerRow = worksheet.addRow(headers);
  headerRow.eachCell(cell => {
    cell.font = { bold: true };
  });

  // Add data rows
  for (const item of data) {
    const values = Object.values(item);
    worksheet.addRow(values);
  }

  // Adjust column widths
  worksheet.columns.forEach(column => {
    const columnWidth = column.header.length < 12 ? 12 : column.header.length;
    column.width = columnWidth < 30 ? columnWidth : 30;
  });

  // Save workbook to file
  await workbook.xlsx.writeFile(outputFilePath);
}
