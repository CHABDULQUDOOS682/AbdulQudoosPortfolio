document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    const formData = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };

    form.addEventListener("input", function (event) {
        const { name, value } = event.target;

        if (name) {
            formData[name] = value;
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailJSData = {
            service_id: emailJSConfig.SERVICE_ID,
            template_id: emailJSConfig.TEMPLATE_ID,
            user_id: emailJSConfig.PUBLIC_KEY,
        };

        fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(emailJSData)
        })
            .then(response => {
                if (response.ok) {
                    alert("Message sent successfully!");
                    form.reset();

                    Object.keys(formData).forEach(key => formData[key] = "");
                } else {
                    return response.text().then(text => { throw new Error(text); });
                }
            })
            .catch(error => {
                alert("Failed to send message. Try again later.");
                console.error("EmailJS Error:", error);
            });
    });
});
