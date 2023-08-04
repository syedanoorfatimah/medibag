 //code for functionality in button
$(document).ready(function() {
    $('.dashboard__block-content').on('click', function() {
      $('.dashboard__block-content').removeClass('clicked');
      $(this).addClass('clicked');
    });
  });
//  code for dopdown button 
$(document).ready(function() {
    $('.dashboard__profile-button').on('click', function() {
      $('.dashboard__dropdown-list').toggle();
    });
    
    $('.dashboard__dropdown-list li').on('click', function() {
      var doctorName = $(this).text();
      $('.dashboard__profile-name').text(doctorName);
      $('.dashboard__dropdown-list').hide();
    });
  });
    