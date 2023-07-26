$(document).ready(function() {
    // Add Medicine button click event
    $('#addMedicineButton').on('click', function() {
      addMedicineRow();
    });
  
    function addMedicineRow() {
      const newRowHtml = `
        <tr>
        <td class="medicine-table__cell"> name</td>
          <td class="medicine-table__cell"> adress data</td>
          <td class="medicine-table__cell"> Doc</td>
          
          <td class="medicine-table__cell">Actions data</td>
        </tr>
      `;
      $('tbody').append(newRowHtml);
    }
  });
  