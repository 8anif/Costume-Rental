document.addEventListener('DOMContentLoaded', function() {
    // Handle arrow click event
    document.querySelectorAll(".arrow").forEach(arrowElement => {
        arrowElement.addEventListener("click", (e) => {
            let arrowParent = e.target.closest('.iocn-link').parentElement;
            arrowParent.classList.toggle("showMenu");
        });
    });

    // Handle sidebar toggle
    const sidebar = document.querySelector(".sidebar");
    const sidebarBtn = document.querySelector(".bx-menu");
    sidebarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    });

    // Handle search button click
    document.getElementById('searchButton').addEventListener('click', function() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const searchResults = {
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
    
        

    /* Footer */
    function showPolicy() {
        alert('Privacy Policy: Your privacy is important to us. We collect personal information to provide better services. Delivery time, fees, damage charges, rental duration, and return process details are explained in our policy.');
    }

    /* Chatbox */
    function toggleChatBox() {
        const chatBox = document.getElementById('whatsappChatPopup');
        chatBox.style.display = (chatBox.style.display === 'none' || chatBox.style.display === '') ? 'block' : 'none';
    }

    function sendMessage() {
        const message = document.getElementById('chatMessage').value;
        const phoneNumber = '8801879915717'; // Admin's phone number

        if (message.trim() !== '') {
            const whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
            window.open(whatsappURL, '_blank');
            document.getElementById('chatMessage').value = ''; // Clear the message input
            toggleChatBox(); // Close the chat box
        } else {
            alert('Please type a message.');
        }
    }

    /* Scroll Arrow */
    const scrollToTopButton = document.getElementById("scrollToTop");

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopButton.classList.add("show");
        } else {
            scrollToTopButton.classList.remove("show");
        }
    });

    // Scroll back to the top when the arrow is clicked
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
