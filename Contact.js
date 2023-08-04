// $(document).ready(function() {
//     $('form').submit(function(event) {
//       var firstName = $('#first-name').val();
//       var lastName = $('#last-name').val();
//       var email = $('#email').val();
//       var subject = $('#subject').val();
//       var message = $('#message').val();
      
//       if(firstName == "" || lastName == "" || email == "" || subject == "" || message == "") {
//         event.preventDefault();
//         $('#error-message').text('Please fill in all required fields');
//       } else if(!isValidEmail(email)) {
//         event.preventDefault();
//         $('#error-message').text('Please enter a valid email address');
//       }
//     });
//   });
  
//   function isValidEmail(email) {
//     var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//     return pattern.test(email);
//   }

  $(document).ready(function() {
    $('form').submit(function(event) {
      // ...
      
      if(firstName == "" || lastName == "" || email == "" || subject == "" || message == "") {
        // ...
      } else if(!isValidEmail(email)) {
        // ...
      } else {
        event.preventDefault();
        $('#success-message').text('Your message has been sent!');
        $('form')[0].reset();
      }
    });
  });

//   $(document).ready(function() {
//     $('a[href^="#"]').click(function(event) {
//       var target = $(this.hash);
//       if (target.length) {
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//       }
//     });
//   });
  