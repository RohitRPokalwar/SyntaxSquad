// Initialize EmailJS (modified version)
emailjs.init({
    publicKey: "G8RSxLwGzAA7YYVna",
    blockHeadless: false, // Changed from true
  });
  
  // Modified sign-in form handler
  document.getElementById('signinForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorMsg = document.getElementById('login-error-msg');
    const successMsg = document.getElementById('login-success-msg');
    const btn = this.querySelector('button');
    
    btn.innerHTML = '<span class="loader">Sending...</span>';
    btn.disabled = true;
  
    try {
      // First check credentials
      if (email === "swamiatharv168@gmail.com" && password === "Atharv16") {
        // Then send email
        const response = await emailjs.send("service_7folirl", "template_8dclmhb", {
          to_email: email,
          from_name: "EduElite Academy",
          message: "You have successfully signed in to your account!"
        });
        
        console.log('EmailJS response:', response); // Debug log
        
        if (response.status === 200) {
          showMessage(successMsg, "Welcome back! Redirecting...");
          setTimeout(() => {
            window.location.href = "index.html";
          }, 2000);
        } else {
          throw new Error('Email failed to send');
        }
      } else {
        throw new Error('Invalid credentials');
      }
      btn.innerHTML = '<span class="loader"></span> Processing...';
    } catch (error) {
      console.error('Error:', error); // Debug log
      btn.innerHTML = 'Sign In';
      btn.disabled = false;
      showMessage(errorMsg, error.message || "An error occurred");
      shakeForm(this);
    }
  });
  
