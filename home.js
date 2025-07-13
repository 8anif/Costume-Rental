document.addEventListener('DOMContentLoaded', function() {
  // Handle arrow click event
  let arrow = document.querySelectorAll(".arrow");
  arrow.forEach(arrowElement => {
    arrowElement.addEventListener("click", (e) => {
      let arrowParent = e.target.closest('.iocn-link').parentElement;
      arrowParent.classList.toggle("showMenu");
    });
  });

  // Handle sidebar toggle
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });

  // Handle search button click
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

    if (searchResults.hasOwnProperty(searchTerm)) {
      window.location.href = searchResults[searchTerm];
    } else {
      alert('Sorry, no results found!');
    }
  });

  // Typing effect for <h1> <span></span>
  const phrases = ["GorgeousGrab", "Elite Costume Rentals", "Our Costume Wonderland"];
  let phraseIndex = 0;
  let letterIndex = 0;
  const h1Span = document.querySelector('h1 span');

  function typeEffect() {
    if (letterIndex < phrases[phraseIndex].length) {
      h1Span.textContent += phrases[phraseIndex][letterIndex];
      letterIndex++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(() => {
        h1Span.textContent = '';
        letterIndex = 0;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeEffect();
      }, 2000);
    }
  }

  typeEffect();

  // Clock, greeting, and date functionalities
  function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    const greetingElem = document.querySelector('.greeting');
    const clockElem = document.querySelector('.clock');
    const calendarElem = document.querySelector('.calendar');

    let greeting;

    if (hours >= 4 && hours < 11) {
      greeting = 'Good Morning!';
    } else if (hours >= 11 && hours < 14) {
      greeting = 'Good Noon!';
    } else if (hours >= 14 && hours < 16) {
      greeting = 'Good Afternoon!';
    } else if (hours >= 16 && hours < 20) {
      greeting = 'Good Evening!';
    } else {
      greeting = 'Good Night!';
    }

    greetingElem.textContent = greeting;
    clockElem.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    calendarElem.textContent = `${day} ${month} ${year}`;
  }

  setInterval(updateTime, 1000);
  updateTime();

  // Handle how it works button
  document.getElementById('howItWorksBtn').addEventListener('click', function() {
    document.getElementById('popupMessage').style.display = 'flex';
  });

  document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popupMessage').style.display = 'none';
  });
});


/*footer*/
function showPolicy() {
  alert('Privacy Policy: Your privacy is important to us. We collect personal information to provide better services. Delivery time, fees, damage charges, rental duration, and return process details are explained in our policy.');
}



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
