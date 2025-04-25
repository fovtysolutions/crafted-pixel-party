
// Modal functionality
const modal = document.getElementById('waitlistModal');
const waitlistButton = document.getElementById('waitlistButton');
const closeButton = document.querySelector('.modal-close');
const waitlistForm = document.getElementById('waitlistForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

// Open modal
waitlistButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modal.classList.add('visible');
});

// Close modal
closeButton.addEventListener('click', () => {
  modal.classList.remove('visible');
  modal.classList.add('hidden');
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
  }
});

// Form submission
waitlistForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = emailInput.value.trim();
  
  // Validate email
  if (!email) {
    showError('Please enter your email address');
    return;
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('Please enter a valid email address');
    return;
  }
  
  // Clear any existing errors
  hideError();
  
  // Here you would typically send the data to your server
  console.log('Submitting email:', email);
  
  // Show success message
  waitlistForm.innerHTML = `
    <div class="bg-[rgba(28,75,196,0.2)] text-white p-4 rounded-lg text-center">
      <h3 class="text-xl font-medium mb-2">You're on the list!</h3>
      <p>Thank you for joining our waitlist. We'll be in touch soon with updates about Bizlaxy.</p>
    </div>
  `;
  
  // Close modal after 3 seconds
  setTimeout(() => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
  }, 3000);
});

function showError(message) {
  emailError.textContent = message;
  emailError.classList.remove('hidden');
}

function hideError() {
  emailError.textContent = '';
  emailError.classList.add('hidden');
}
