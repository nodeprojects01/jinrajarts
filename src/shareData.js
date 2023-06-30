import * as ExcelJS from 'exceljs';

function generateTemplate() {
  const data = {
    headers: ["name", "age", "gender"],
    properties: {
      gender: ["male", "female"]
    }
  };

  // Create a new Excel workbook
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Sheet1");
  
  // Set headers
  sheet.addRow(data.headers);
  
  // Add dropdown for gender column
  const genderColumnIndex = data.headers.indexOf("gender") + 1;
  const genderProperty = data.properties.gender;
  
  // Create a data validation for the gender column
  const genderValidation = {
    type: "list",
    formula1: genderProperty.map(gender => gender),
    showDropDown: true,
  };
  
  // Apply the data validation to the cells
  const genderColumn = sheet.getColumn(genderColumnIndex);
  genderColumn.eachCell((cell, rowNumber) => {
    if (rowNumber > 1) {
      cell.dataValidation = genderValidation;
    }
  });
  
  // Save the workbook
  workbook.xlsx.writeBuffer().then(buffer => {
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "template.xlsx";
    a.click();
    window.URL.revokeObjectURL(url);
  });
}

generateTemplate();
