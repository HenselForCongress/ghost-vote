document.querySelectorAll('.signup-form').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

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
        alert(result);
      } catch (err) {
        console.error('Error:', err);
        alert('Signup failed');
      }
    });
  });
