const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
// Add an event listener to the enquiry button
const enquiryButtons = document.querySelectorAll('.enquiry-btn');

enquiryButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Get the product information from the button's parent element
    const product = button.parentNode;
    const productName = product.querySelector('h2').textContent;
    const productDescription = product.querySelector('p').textContent;

    // Create a popup with the product information
    const popup = document.createElement('div');
    popup.innerHTML = `
      <h2>${productName}</h2>
      <p>${productDescription}</p>
      <button class="close-popup">Close</button>
    `;
    popup.className = 'popup';

    // Add the popup to the page
    document.body.appendChild(popup);

    // Add an event listener to the close button
    const closePopupButton = popup.querySelector('.close-popup');
    closePopupButton.addEventListener('click', () => {
      popup.remove();
    });
  });
});
// Add an event listener to the submit button
const submitButton = document.querySelector('.submit-btn');

submitButton.addEventListener('click', (e) => {
  // Get the form elements
  const form = document.querySelector('form');
  const nameInput = form.querySelector('#name');
  const phoneInput = form.querySelector('#phone');
  const emailInput = form.querySelector('#email');
  const queryInput = form.querySelector('#query');

  // Check if the form is fully filled and valid
  if (nameInput.value && phoneInput.value && emailInput.value && queryInput.value) {
    if (validatePhone(phoneInput.value) && validateEmail(emailInput.value)) {
      // Create a popup with the success message
      const popup = document.createElement('div');
      popup.innerHTML = `
        <h2>Form Submitted!</h2>
        <p>Thank you for submitting your query. We will get back to you soon.</p>
        <button class="close-popup">Close</button>
      `;
      popup.className = 'popup';

      // Add the popup to the page
      document.body.appendChild(popup);

      // Add an event listener to the close button
      const closePopupButton = popup.querySelector('.close-popup');
      closePopupButton.addEventListener('click', () => {
        popup.remove();
      });

      // Reset the form
      form.reset();
    } else {
      alert('Please enter a valid phone number and email address!');
    }
  } else {
    alert('Please fill out all the fields!');
  }
});

// Function to validate phone number
function validatePhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

// Function to validate email
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}