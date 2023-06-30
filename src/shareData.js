function generateTemplate() {
  const data = {
    headers: ["name", "age", "gender"],
    properties: {
      gender: ["male", "female"]
    }
  };

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet([data.headers]);
  
  // Add dropdown for gender column
  const genderColumnIndex = data.headers.indexOf("gender");
  const genderProperty = data.properties.gender;
  const genderValidation = {
    type: "list",
    formula1: '"' + genderProperty.join(",") + '"',
  };
  const genderRange = XLSX.utils.encode_range({
    s: { c: genderColumnIndex, r: 1 },
    e: { c: genderColumnIndex, r: 100 },
  });
  worksheet["!cols"] = [{}, {}, { x14ac: 1 }];
  worksheet["!dataValidations"] = [
    {
      ref: genderRange,
      validation: genderValidation,
    },
  ];
  
  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  
  // Save the workbook
  const wbout = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
  const blob = new Blob([wbout], { type: "application/octet-stream" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "template.xlsx";
  a.click();
  window.URL.revokeObjectURL(url);
}
