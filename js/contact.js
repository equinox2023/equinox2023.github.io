 
          function sendEmail(name, email, company, message) {
            Email.send({
              Host: "smtp.elasticemail.com",
              Username: "equinox@lmcst.ac.in",
              Password: "9920F7CC836A82788824E31A5CE229FCD4ED",
              To: "equinox@lmcst.ac.in",
              From: "equinox@lmcst.ac.in",
              Subject: "New Equinox 2023 Enquiry",
              Body: `Name: ${name}<br>Email: ${email}<br>College Name: ${company}<br>Message: ${message}`
            })
            .then(function(response) {
                if (response === 'OK') {
                    // Replace the text below with your custom success message
                    alert("Thank you! Your message has been sent successfully.");
                } else {
                    alert("Oops! Something went wrong. Please try again later.");
                }
            });
        }
        
        const form = document.querySelector("#contact-form");
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const nameInput = document.querySelector("#contact-name");
            const emailInput = document.querySelector("#contact-email");
            const companyInput = document.querySelector("#contact-company");
            const messageInput = document.querySelector("#contact-message");
            sendEmail(nameInput.value, emailInput.value, companyInput.value, messageInput.value);
            form.reset();
        });