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

  // Add data rows
  const numRows = 5000;
  for (let i = 0; i < numRows; i++) {
    sheet.addRow(["", "", ""]);
  }

  // Define the range for the table
  const tableRange = {
    from: {
      row: 1,
      column: 1,
    },
    to: {
      row: numRows + 1,
      column: data.headers.length,
    },
  };

  // Add the table
  const table = sheet.addTable({
    name: "MyTable",
    ref: tableRange,
    headerRow: true,
    totalsRow: false,
    style: {
      theme: 'TableStyleMedium2',
    },
    columns: data.headers.map(header => ({
      name: header,
    })),
  });

  // Add dropdown validation to the gender column
  const genderColumnIndex = data.headers.indexOf("gender");
  const genderProperty = data.properties.gender;

  const dropdownFormula = `=Sheet1!$${String.fromCharCode(64 + genderColumnIndex + 1)}$2:$${String.fromCharCode(64 + genderColumnIndex + 1)}$${genderProperty.length + 1}`;

  const genderColumn = table.getColumn(genderColumnIndex + 1);
  genderColumn.dataValidation = {
    type: 'list',
    formula1: dropdownFormula,
    showDropDown: true,
  };

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
