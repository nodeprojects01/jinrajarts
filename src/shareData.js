import * as ExcelJS from 'exceljs';
import * as XLSX from 'xlsx';

function generateTemplate() {
  const data = {
    headers: ["name", "age", "gender"],
    properties: {
      gender: ["male", "female"]
    }
  };

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Sheet1");

  // Set headers
  sheet.addRow(data.headers);

  // Add dropdown for gender column
  const genderColumnIndex = data.headers.indexOf("gender") + 1;
  const genderProperty = data.properties.gender;
  const genderRange = `'Sheet1'!$${String.fromCharCode(64 + genderColumnIndex)}$2:$${String.fromCharCode(64 + genderColumnIndex)}$100`;

  const dropdownValidation = {
    type: 'list',
    formula1: genderRange,
    showDropDown: true,
  };

  sheet.getColumn(genderColumnIndex).eachCell((cell, rowNumber) => {
    if (rowNumber > 1) {
      cell.dataValidation = dropdownValidation;
    }
  });

  // Convert workbook to XLSX format
  const workbookBuffer = await workbook.xlsx.writeBuffer();
  const workbookArray = Array.from(new Uint8Array(workbookBuffer));
  const worksheet = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(worksheet, XLSX.utils.aoa_to_sheet([]), 'Sheet1');
  XLSX.utils.sheet_add_aoa(worksheet.Sheets.Sheet1, workbookArray, { origin: -1 });

  // Save the workbook as XLSX
  const xlsxData = XLSX.write(worksheet, { bookType: 'xlsx', type: 'array' });
  const xlsxFile = new Blob([xlsxData], { type: 'application/octet-stream' });
  const url = window.URL.createObjectURL(xlsxFile);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'template.xlsx';
  a.click();
  window.URL.revokeObjectURL(url);
}

generateTemplate();
