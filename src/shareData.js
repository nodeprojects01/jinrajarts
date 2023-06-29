import XLSX from 'xlsx';

function generateExcelWithDropdown(headers, properties) {
  const workbook = XLSX.utils.book_new();
  const sheetName = 'Sheet1';

  // Create worksheet
  const worksheet = XLSX.utils.aoa_to_sheet([headers]);

  // Add dropdown values for the specified columns
  for (const columnKey in properties) {
    const dropdownValues = properties[columnKey];

    // Set data validation for the column
    const column = headers.indexOf(columnKey);
    const range = {
      s: { r: 1, c: column },
      e: { r: 1048575, c: column },
    };
    const validation = {
      type: 'list',
      formula1: `"${dropdownValues.join(',')}"`,
    };
    worksheet['!cols'] = worksheet['!cols'] || [];
    worksheet['!cols'][column] = { wch: 15 };
    worksheet['!dataValidations'] = worksheet['!dataValidations'] || [];
    worksheet['!dataValidations'].push({ range, validation });
  }

  // Add worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  // Generate Excel file
  const excelFile = XLSX.write(workbook, { type: 'binary', bookType: 'xlsx' });

  // Convert binary string to Blob
  const arrayBuffer = new ArrayBuffer(excelFile.length);
  const view = new Uint8Array(arrayBuffer);
  for (let i = 0; i < excelFile.length; i++) {
    view[i] = excelFile.charCodeAt(i) & 0xff;
  }
  const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });

  // Create a temporary link element to download the file
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'output.xlsx';
  link.click();
}

// Example usage
const headers = ['name', 'gender', 'age'];
const properties = {
  gender: ['male', 'female'],
  age: ['below 12', 'above 12'],
};

generateExcelWithDropdown(headers, properties);
