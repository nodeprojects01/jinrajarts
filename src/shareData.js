import React, { useState } from 'react';
import XLSX from 'xlsx';

function ExcelGenerator() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('');

  const handleGenerateExcel = () => {
    const workbook = XLSX.utils.book_new();

    const teamsWorksheet = XLSX.utils.aoa_to_sheet([['Teams'], ...teams]);
    XLSX.utils.book_append_sheet(workbook, teamsWorksheet, 'Teams');

    const mainWorksheet = XLSX.utils.aoa_to_sheet([
      ['Country', 'Teams', 'Games', 'Wins'],
    ]);
    XLSX.utils.book_append_sheet(workbook, mainWorksheet, 'Main');

    // Create data validation for the Teams column in the Main sheet
    const mainSheetRange = XLSX.utils.decode_range(mainWorksheet['!ref']);
    const teamsColumn = mainSheetRange.s.c + 1; // Column index of the Teams column
    const teamsDropdownRange = `'Teams'!$A$2:$A${teams.length + 1}`; // Range of dropdown values

    const dataValidation = {
      t: 'list',
      ref: XLSX.utils.encode_range({ s: mainSheetRange.s, e: mainSheetRange.e, c: teamsColumn }),
      formula1: teamsDropdownRange,
    };
    mainWorksheet['!validations'] = [dataValidation];

    XLSX.writeFile(workbook, 'teams.xlsx');
  };

  return (
    <div>
      <button onClick={handleGenerateExcel}>Generate Excel</button>
      <br />
      <br />
      <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
        <option value="">Select a team</option>
        {teams.map((team, index) => (
          <option key={index} value={team}>
            {team}
          </option>
        ))}
      </select>
    </div>
  );
}
