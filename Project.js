// jQuery code to show/hide pages
$(document).ready(function() {
    // Show Home page by default
    $('#home').show();
  
    // Show/hide pages on click of navigation links
    $('nav a').click(function() {
      // Get the ID of the clicked link
      var pageId = $(this).attr('href');
      
      // Hide all pages
      $('.page').hide();
      
      // Show the clicked page
      $(pageId).show();
      
      // Prevent default link behavior
      return false;
    });
  });
  