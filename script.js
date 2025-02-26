
const tableData = [
    { id: "A1", value: 41 },
    { id: "A2", value: 18 },
    { id: "A3", value: 21 },
    { id: "A4", value: 63 },
    { id: "A5", value: 2 },
    { id: "A6", value: 53 },
    { id: "A7", value: 5 },
    { id: "A8", value: 57 },
    { id: "A9", value: 60 },
    { id: "A10", value: 93 },
    { id: "A11", value: 28 },
    { id: "A12", value: 3 },
    { id: "A13", value: 90 },
    { id: "A14", value: 39 },
    { id: "A15", value: 80 },
    { id: "A16", value: 88 },
    { id: "A17", value: 49 },
    { id: "A18", value: 60 },
    { id: "A19", value: 26 },
    { id: "A20", value: 28 }
  ];
  function populateTable1() {
    const tableBody = document.querySelector('#table1 tbody');
    tableBody.innerHTML = '';
    
    tableData.forEach(row => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td>${row.id}</td>
        <td>${row.value}</td>
      `;
      
      tableBody.appendChild(tr);
    });
  }
  
  function calculateTable2(data) {
    const a5 = data.find(item => item.id === "A5").value;
    const a7 = data.find(item => item.id === "A7").value;
    const a12 = data.find(item => item.id === "A12").value;
    const a13 = data.find(item => item.id === "A13").value;
    const a15 = data.find(item => item.id === "A15").value;
    const a20 = data.find(item => item.id === "A20").value;
    
    return {
      Alpha: a5 + a20,
      Beta: a15 / a7,
      Charlie: a13 * a12
    };
  }
  
  // Function to populate Table 2
  function populateTable2() {
    const tableBody = document.querySelector('#table2 tbody');
    tableBody.innerHTML = '';
    
    const calculatedData = calculateTable2(tableData);
    
    // Alpha row
    const alphaRow = document.createElement('tr');
    alphaRow.innerHTML = `
      <td>Alpha</td>
      <td>${calculatedData.Alpha}</td>
      <td>A5 + A20</td>
    `;
    tableBody.appendChild(alphaRow);
    
    // Beta row
    const betaRow = document.createElement('tr');
    betaRow.innerHTML = `
      <td>Beta</td>
      <td>${calculatedData.Beta.toFixed(2)}</td>
      <td>A15 / A7</td>
    `;
    tableBody.appendChild(betaRow);
    
    // Charlie row
    const charlieRow = document.createElement('tr');
    charlieRow.innerHTML = `
      <td>Charlie</td>
      <td>${calculatedData.Charlie}</td>
      <td>A13 * A12</td>
    `;
    tableBody.appendChild(charlieRow);
  }
  document.addEventListener('DOMContentLoaded', () => {
    populateTable1();
    populateTable2();
  });