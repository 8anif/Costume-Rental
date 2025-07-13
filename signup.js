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


const card = document.getElementById('auth-card');

function toggleForm() {
  card.classList.toggle('flipped');
}
// Store the user signup data (for demo purposes, using localStorage)
function signUp(event) {
  event.preventDefault(); // Prevent form submission

  const email = document.querySelector('#signup-side input[type="email"]').value;
  const password = document.querySelector('#signup-side input[type="password"]').value;
  const confirmPassword = document.querySelector('#signup-side input[placeholder="Confirm Password"]').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Save the user data to localStorage (simple emulation)
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);

  alert('Signup successful! Please login now.');
  toggleForm(); // Switch to login form
}

// Handle login logic and validate against saved credentials
function login(event) {
  event.preventDefault(); // Prevent form submission

  const usernameOrEmail = document.querySelector('#login-side input[placeholder="Username or Email"]').value;
  const password = document.querySelector('#login-side input[type="password"]').value;

  const savedEmail = localStorage.getItem('userEmail');
  const savedPassword = localStorage.getItem('userPassword');

  if (usernameOrEmail === savedEmail && password === savedPassword) {
    alert('Login successful! Welcome back.');
    // Redirect or perform further actions here
  } else {
    alert('Invalid login credentials. Please try again.');
  }
}

// Attach event listeners for form submission
document.querySelector('#login-side form').addEventListener('submit', login);
document.querySelector('#signup-side form').addEventListener('submit', signUp);


function showPolicy() {
  alert('Privacy Policy: Your privacy is important to us. We collect personal information to provide better services. Delivery time, fees, damage charges, rental duration, and return process details are explained in our policy.');
}z