var ctx = document.getElementById('myChart').getContext('2d');
 var data = {
    labels: ['Male', 'Female', 'Children'],
    datasets: [{
      data: [30, 40, 30],
      backgroundColor: ['#116671', '#38A9F6', '#D3D05A']
    }]
  };

  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data
  });