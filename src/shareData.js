import * as ExcelJS from 'exceljs';
import * as XLSX from 'xlsx';

async function generateTemplate() {
  const data = {
    headers: ["name", "age", "gender"],
    properties: {
      gender: ["male", "female", "non-binary", "undisclosed", "transgender", "agender", "bigender", "genderqueer", "genderfluid", "two-spirit", "other", "prefer not to say", "not applicable", "unknown", "rather not say", "all"]
    }
  };

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Sheet1");

  // Set headers
  sheet.addRow(data.headers);

  // Add dropdown for gender column
  const genderColumnIndex = data.headers.indexOf("gender") + 1;
  const genderProperty = data.properties.gender;
  const maxDropdownValuesPerRange = 12;
  const dropdownRanges = [];

  for (let i = 0; i < genderProperty.length; i += maxDropdownValuesPerRange) {
    const chunk = genderProperty.slice(i, i + maxDropdownValuesPerRange);
    dropdownRanges.push(chunk.join(","));
  }

  const dropdownValidation = {
    type: 'list',
    formula1: dropdownRanges.join(","),
    showDropDown: true,
  };

  // Assign dropdown validation to the first cell of the gender column
  const firstCell = sheet.getCell(2, genderColumnIndex);
  firstCell.dataValidation = dropdownValidation;

  // Convert workbook to XLSX format
  const workbookBuffer = await workbook.xlsx.writeBuffer();
  const workbookArray = new Uint8Array(workbookBuffer);

  // Save the workbook as XLSX
  const xlsxFile = new Blob([workbookArray], { type: 'application/octet-stream' });
  const url = window.URL.createObjectURL(xlsxFile);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'template.xlsx';
  a.click();
  window.URL.revokeObjectURL(url);
}

generateTemplate();
