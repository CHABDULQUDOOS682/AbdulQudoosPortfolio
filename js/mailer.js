document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    console.log(process.env.PUBLIC_KEY);
    console.log(process.env.SERVICE_ID);
    console.log(process.env.TEMPLATE_ID);

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
            // **** For Local Usage ****

            // service_id: emailJSConfig.SERVICE_ID,
            // template_id: emailJSConfig.TEMPLATE_ID,
            // user_id: emailJSConfig.PUBLIC_KEY,

            // **** For Live Usage ****
            service_id: process.env.SERVICE_ID,
            template_id: process.env.TEMPLATE_ID,
            user_id: process.env.PUBLIC_KEY,
            template_params: { ...formData }
        };



        console.log("=>", emailJSData.service_id);
        console.log("=>", emailJSData.template_id);
        console.log("=>", emailJSData.user_id);

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
