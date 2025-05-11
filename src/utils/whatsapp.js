export const whatsappData = () => {
  var phoneNumber = "919215223030"; // Replace with the phone number

  var whatsappUrl = "https://api.whatsapp.com/send?phone=" + phoneNumber;

  window.location.href = whatsappUrl;
};
