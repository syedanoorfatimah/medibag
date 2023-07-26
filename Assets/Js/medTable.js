$(document).ready(function() {
    // Add Medicine button click event
    $('#addMedicineButton').on('click', function() {
      addMedicineRow();
    });
  
    function addMedicineRow() {
      const newRowHtml = `
        <tr>
        <td class="medicine-table__cell"> item prescriper code</td>
          <td class="medicine-table__cell">Item code data</td>
          <td class="medicine-table__cell">Name, manner of administration and form &amp; strength data</td>
          <td class="medicine-table__cell">Max qty<br>packs data</td>
          <td class="medicine-table__cell">Max qty<br>units data</td>
          <td class="medicine-table__cell">Dispensed price for max qty data</td>
          <td class="medicine-table__cell">(Brands) data</td>
          <td class="medicine-table__cell">Actions data</td>
        </tr>
      `;
      $('tbody').append(newRowHtml);
    }
  });
  