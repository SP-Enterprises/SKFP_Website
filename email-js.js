
//  // Initialize EmailJS
//  (function () {
//     emailjs.init(""); // Replace with your Public Key
//   })();
// Add event listener to the form
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Collect form data
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;
    const subject = document.getElementById("subject").value;
    const comments = document.getElementById("comments").value;

    // Create EmailJS parameters object
    const templateParams = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        telephone: telephone,
        subject: subject,
        message: comments,
    };

    // Send email
    emailjs
        .send("service_7gqxpft", "template_r5quvnb", templateParams)
        .then(
            function (response) {
            // throw new Error("hii");
                alert("Message sent successfully!");
                console.log("SUCCESS!", response.status, response.text);
            }).catch(
                function (error) {
                    alert(`Failed to send message. Please try again.${error.message}`);
                    console.error("FAILED...", );
                }
            );
});

