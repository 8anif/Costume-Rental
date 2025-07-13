let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
   let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
   arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
  });


 /*search bar*/
 document.getElementById('searchButton').addEventListener('click', function() {
  let searchTerm = document.getElementById('searchInput').value.toLowerCase();
  let searchResults = {
    'sherwani': '/sherwani.html',
    'panjabi': '/panjabi.html',
    'men jacket': '/menjacket.html',
    'men blazer': '/menblazer.html',
    'princecoat': '/princecoat.html',
    'achkan': '/mensuit.html',
    'women suit': '/womensuit.html',
    'women blazer': '/womenblazer.html',
    'women jacket': '/womenjacket.html',
    'gown': '/gown.html',
    'sharee': '/sharee.html',
    'share': '/sharee.html',
    'sare': '/sharee.html',
    'lehenga': '/lehenga.html',
    'summer': '/summer.html',
    'hot': '/summer.html',
    'summer collection for men': '/summermen.html',
    'summer men': '/summermen.html',
    'men summer': '/summermen.html',
    'summer collection for women': '/summerwomen.html',
    'summer women': '/summerwomen.html',
    'women summer': '/summerwomen.html',
    'winter collection for men': '/wintermen.html',
    'winter men': '/wintermen.html',
    'men winter': '/wintermen.html',
    'winter collection for women': '/winterwomen.html',
    'winter women': '/winterwomen.html',
    'women winter': '/winterwomen.html',
    'winter': '/winter.html',
    'cold': '/winter.html',
    'cool': '/winter.html',
    'cart': '/cart.html',
    'about': '/about.html',
    'contact': '/contact.html',
    'signup': '/signup.html',
    'member': '/signup.html', 
    'home': '/home.html',
    'main': '/home.html'
  };

  // Check if searchTerm exists in searchResults
  if (searchResults.hasOwnProperty(searchTerm)) {
    // Redirect to the corresponding page
    window.location.href = searchResults[searchTerm];
  } else {
    alert('Sorry, no results found!');
  }
}); 


/*main*/
document.querySelector('.policy-toggle-button').addEventListener('click', function() {
  const policyDetails = document.querySelector('.policy-details');
  policyDetails.style.display = policyDetails.style.display === 'none' || policyDetails.style.display === '' ? 'block' : 'none';
});



/*chatbox*/

// Toggle the visibility of the chat box
function toggleChatBox() {
  var chatBox = document.getElementById('whatsappChatPopup');
  if (chatBox.style.display === 'none' || chatBox.style.display === '') {
      chatBox.style.display = 'block';
  } else {
      chatBox.style.display = 'none';
  }
}

// Send message via WhatsApp
function sendMessage() {
  var message = document.getElementById('chatMessage').value;
  var phoneNumber = '8801879915717'; // Admin's phone number

  if (message.trim() !== '') {
      var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
      window.open(whatsappURL, '_blank');
      document.getElementById('chatMessage').value = ''; // Clear the message input
      toggleChatBox(); // Close the chat box
  } else {
      alert('Please type a message.');
  }
}


/*scroll arrow*/
// Get the arrow element
var scrollToTopButton = document.getElementById("scrollToTop");

// Show or hide the arrow based on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopButton.classList.add("show");
    } else {
        scrollToTopButton.classList.remove("show");
    }
};

// Scroll back to the top when the arrow is clicked
function scrollToTopFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


/*footer*/
function showPolicy() {
  alert('Privacy Policy: Your privacy is important to us. We collect personal information to provide better services. Delivery time, fees, damage charges, rental duration, and return process details are explained in our policy.');
}
