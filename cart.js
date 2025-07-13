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


document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountSpan = document.getElementById('total-amount');
    const confirmOrderButton = document.getElementById('confirm-order-btn');
    const locationSelect = document.getElementById('location');
    const paymentMethodSelect = document.getElementById('payment-method');
    const transactionDetails = document.getElementById('transaction-details');

    // Function to calculate total price
    function calculateTotal() {
        let total = 0;
        const days = Number(localStorage.getItem('rentalDays')) || 1; // Rental days from storage or default to 1
        const selectedLocation = locationSelect.value;
        const deliveryCharge = parseFloat(selectedLocation.split('-')[1]) || 0; // Delivery charge

        cart.forEach(data => {
            const itemPricePerDay = parseFloat(data.price) || 0; // Ensure price is a number
            const itemTotal = itemPricePerDay * days; // Multiply by rental days
            total += itemTotal;
        });

        total += deliveryCharge; // Add delivery charge to the total
        totalAmountSpan.innerText = `BDT ${total.toFixed(2)}`; // Display total amount with currency
    }

    // Populate cart items
    function populateCart() {
        cartItemsContainer.innerHTML = ''; // Clear existing items

        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';

            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Size: ${item.size}</p> <!-- Display selected size -->
                    <p>Color: ${item.color}</p> <!-- Display selected color -->
                    <p>Pickup Date: ${item.pickupDate}</p>
                    <p>Return Date: ${item.returnDate}</p>
                    <p>Price: BDT ${item.price} per day</p>
                    <button class="remove-item-btn" data-index="${index}">Remove</button>
                </div>
            `;

            cartItemsContainer.appendChild(itemDiv);
        });

        calculateTotal(); // Calculate and display total
        attachRemoveItemHandlers(); // Attach remove handlers
    }

    // Show/hide transaction details based on payment method
    paymentMethodSelect.addEventListener('change', () => {
        if (paymentMethodSelect.value !== 'cash') {
            transactionDetails.classList.remove('hidden');
        } else {
            transactionDetails.classList.add('hidden');
        }
    });

    // Confirm order button functionality
    confirmOrderButton.addEventListener('click', () => {
        const location = locationSelect.value;
        const paymentMethod = paymentMethodSelect.value;
        const paymentNumber = document.getElementById('payment-number').value;
        const transactionId = document.getElementById('transaction-id').value;

        if (paymentMethod !== 'cash' && (!paymentNumber || !transactionId)) {
            alert('Please enter payment details.');
            return;
        }

        // Display total amount before confirming
        if (!confirm(`The total amount is BDT ${totalAmountSpan.innerText}. Do you want to confirm the order?`)) {
            return;
        }

        // Assuming you would process the order here
        alert('Order confirmed!');

        // Clear the cart
        localStorage.removeItem('cart');
        populateCart(); // Re-populate the cart after clearing
    });

    // Recalculate total when location changes
    locationSelect.addEventListener('change', calculateTotal);

    // Attach remove item handlers
    function attachRemoveItemHandlers() {
        const removeButtons = document.querySelectorAll('.remove-item-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const itemIndex = e.target.getAttribute('data-index');
                cart.splice(itemIndex, 1); // Remove item from cart array
                localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
                populateCart(); // Refresh the cart display
            });
        });
    }

    // Initialize the cart display
    populateCart();
});


  // Policy function for privacy and policy button
  function showPolicy() {
      alert('Privacy Policy: Your privacy is important to us. We collect personal information to provide better services. Delivery time, fees, damage charges, rental duration, and return process details are explained in our policy.');
  }
  