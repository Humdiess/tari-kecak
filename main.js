document.addEventListener('DOMContentLoaded', () => {
    const dateItems = document.querySelectorAll('.date-item');
    const showTimes = document.querySelector('.show-times');
    
    // Set first date as active by default
    dateItems[0].classList.add('active');
    
    dateItems.forEach(item => {
      item.addEventListener('click', () => {
        // Remove active class from all dates
        dateItems.forEach(date => date.classList.remove('active'));
        
        // Add active class to clicked date
        item.classList.add('active');
        
        // Update show times based on selected date
        const selectedDate = item.getAttribute('data-date');
        updateShowTimes(selectedDate);
      });
    });
  
    function updateShowTimes(date) {
      // This is a sample implementation. In a real-world scenario,
      // you might fetch this data from a server based on the selected date.
      const showTimesData = {
        '23': [
          { time: '19:00 - 20:00', price: 'IDR 160.000' },
          { time: '20:30 - 21:30', price: 'IDR 160.000' },
          { time: '22:00 - 23:00', price: 'IDR 180.000' },
        ],
        '24': [
          { time: '18:30 - 19:30', price: 'IDR 170.000' },
          { time: '20:00 - 21:00', price: 'IDR 170.000' },
          { time: '21:30 - 22:30', price: 'IDR 190.000' },
        ],
        // Add data for other dates...
      };
  
      const selectedShows = showTimesData[date] || [];
  
      // Clear existing show times
      showTimes.innerHTML = '';
  
      // Add new show times
      selectedShows.forEach((show, index) => {
        const showItem = document.createElement('div');
        showItem.classList.add('show-item');
        showItem.innerHTML = `
          <div class="show-info">
            <h3>Tari Kecak Uluwatu Show ${index + 1}</h3>
            <p class="time">${show.time}</p>
          </div>
          <div class="show-price">
            <p>${show.price}</p>
            <button class="book-btn">Book now</button>
          </div>
        `;
        showTimes.appendChild(showItem);
      });
  
      // If no shows available for the selected date
      if (selectedShows.length === 0) {
        showTimes.innerHTML = '<p>No shows available for this date.</p>';
      }
    }
  
    // Initialize booking functionality
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('book-btn')) {
        const showInfo = e.target.closest('.show-item').querySelector('.show-info').textContent;
        alert(`Booking for: ${showInfo}`);
        // Here you would typically open a booking modal or redirect to a booking page
      }
    });
  });


  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const socialLinks = document.getElementById('socialLinks');

  navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      socialLinks.classList.toggle('active');
      navToggle.innerHTML = navLinks.classList.contains('active') 
          ? '<i class="fas fa-times"></i>' 
          : '<i class="fas fa-bars"></i>';
  });

  // Get elements
const popupModal = document.getElementById('popupModal');
const closePopup = document.getElementById('closePopup');
const readMoreButtons = document.querySelectorAll('a[href="#"], .readmore a, .book-btn');

// Show modal when any button is clicked
readMoreButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    popupModal.style.display = 'flex'; // Show modal
  });
});

// Close modal when 'x' is clicked
closePopup.addEventListener('click', () => {
  popupModal.style.display = 'none';
});

// Close modal when clicking outside the modal content
popupModal.addEventListener('click', (e) => {
  if (e.target === popupModal) {
    popupModal.style.display = 'none';
  }
});
