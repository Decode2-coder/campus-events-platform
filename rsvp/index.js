function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: "Thanks For Registering For the Event."
    };

    const serviceID = "service_24ugt3i";
    const templateId = "template_1sdtcxp";

    emailjs.send(serviceID, templateId, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            alert("Message Sent Successfully");
        })
        .catch(err => console.log(err));
}