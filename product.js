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
    'men suit': '/mensuit.html',
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
    // Add more as needed
  };

  // Check if searchTerm exists in searchResults
  if (searchResults.hasOwnProperty(searchTerm)) {
    // Redirect to the corresponding page
    window.location.href = searchResults[searchTerm];
  } else {
    alert('Sorry, no results found!');
  }
});

/*cards*/
// Color selection changes image
document.addEventListener('DOMContentLoaded', () => {
  const colorButtons = document.querySelectorAll('.color-btn');
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  const datePickerPopup = document.getElementById('date-picker-popup');
  const confirmDatesButton = document.getElementById('confirm-dates-btn');
  const closePopupButton = document.getElementById('close-popup-btn');
  let selectedProduct = null;
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Change product image based on selected color
  colorButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productCard = button.closest('.product-card');
      const productImage = productCard.querySelector('.product-image');
      productImage.src = button.dataset.image;
    });
  });

  // Show date picker popup and store selected product
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      selectedProduct = button.closest('.product-card');
      datePickerPopup.classList.remove('hidden');
    });
  });

  // Confirm dates and add product to cart
  confirmDatesButton.addEventListener('click', () => {
    const pickupDate = new Date(document.getElementById('pickup-date').value);
    const returnDate = new Date(document.getElementById('return-date').value);
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value;

    if (pickupDate && returnDate && !isNaN(pickupDate) && !isNaN(returnDate) && pickupDate <= returnDate) {
      const pricePerDay = parseFloat(selectedProduct.dataset.price);
      const rentalDays = Math.ceil((returnDate - pickupDate) / (1000 * 60 * 60 * 24)); // Calculate number of days
      const totalPrice = pricePerDay * rentalDays;

      const product = {
        id: selectedProduct.dataset.id,
        name: selectedProduct.querySelector('h2').textContent,
        size, // Include selected size
        color, // Include selected color
        price: totalPrice.toFixed(2), // Store total price instead of price per day
        image: selectedProduct.querySelector('.product-image').src,
        pickupDate: pickupDate.toISOString().split('T')[0], // Format date for storage
        returnDate: returnDate.toISOString().split('T')[0] // Format date for storage
      };

      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      datePickerPopup.classList.add('hidden');
      alert(`Product added to cart. Total price: BDT ${totalPrice.toFixed(2)}`);
    } else {
      alert('Please select valid pickup and return dates.');
    }
  });

  // Close date picker popup
  closePopupButton.addEventListener('click', () => {
    datePickerPopup.classList.add('hidden');
  });
});


/*chatbox*/
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