import React, { useState } from 'react';
import ExcelJS from 'exceljs';

function ExcelGenerator() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('');

  const handleGenerateExcel = () => {
    const workbook = new ExcelJS.Workbook();
    
    const teamsSheet = workbook.addWorksheet('Teams');
    teamsSheet.getColumn('A').values = [['Teams'], ...teams.map(team => [team])];
    
    const mainSheet = workbook.addWorksheet('Main');
    mainSheet.columns = [
      { header: 'Country', key: 'country' },
      { header: 'Teams', key: 'team', dataValidation: { type: 'list', formula1: `Teams!$A$2:$A${teams.length + 1}` } },
      { header: 'Games', key: 'games' },
      { header: 'Wins', key: 'wins' }
    ];
    
    workbook.xlsx.writeBuffer().then(buffer => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, 'teams.xlsx');
    });
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
