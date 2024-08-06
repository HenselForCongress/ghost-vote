document.querySelectorAll('.signup-form').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailInput = form.querySelector('input[name="email"]');
    const email = emailInput.value;


    // Simple validation checks
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      emailInput.setCustomValidity('Please enter a valid email address.');
      emailInput.reportValidity();
      return;
    } else {
      emailInput.setCustomValidity('');
    }


    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://flare-forms.henselforcongress.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.text();
      if (response.ok) {
        emailInput.value = 'Thank you!';
        zipInput.value = '';
      } else {
        throw new Error(result);
      }

      // Track the successful signup event
      if (typeof gtag === 'function') {
        gtag('event', 'Form Submission', {
          'event_category': 'Form Submission',
          'event_label': form.getAttribute('data-form-type') || 'unknown',
        });
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Signup failed');
    }
  });
});
