document.addEventListener('DOMContentLoaded', function() {
    var intros = document.querySelectorAll('.intro');
  
    intros.forEach(function(intro) {
      var fullText = intro.nextElementSibling,
          readMoreBtn = fullText.nextElementSibling;
  
      var words = intro.textContent.split(' ');
  
      if (words.length > 30) {
        var truncatedText = words.slice(0, 30).join(' ');
        intro.textContent = truncatedText + '...';
        readMoreBtn.style.display = 'inline-block';
  
        readMoreBtn.addEventListener('click', function() {
          if (fullText.style.display === 'none') {
            intro.textContent = words.join(' ');
            fullText.style.display = 'block';
            readMoreBtn.textContent = 'Read Less';
          } else {
            intro.textContent = truncatedText + '...';
            fullText.style.display = 'none';
            readMoreBtn.textContent = 'Read More';
          }
        });
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all request buttons
    var requestButtons = document.querySelectorAll('.button.request');
    requestButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Find the corresponding message element for this button
            var message = button.parentElement.querySelector('.request-message');
            // Show the message
            message.style.display = 'block';
            // Hide the message after 2 seconds
            setTimeout(function() {
                message.style.display = 'none';
            }, 2000);
        });
    });
});
