
/* D.E.W. More Logistics LLC
   Freight Quote Email Preparation */

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("quoteForm");

  if (!form) return;

  form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!form.reportValidity()) return;

    const formData = new FormData(form);

    const fields = [
      ["Full Name", "contactName"],
      ["Company Name", "company"],
      ["Email Address", "email"],
      ["Phone Number", "phone"],
      ["Service Requested", "service"],
      ["Pickup Date", "pickupDate"],
      ["Pickup Location", "pickup"],
      ["Delivery Location", "delivery"],
      ["Estimated Weight", "weight"],
      ["Cargo Dimensions", "dimensions"],
      ["Shipment Description", "details"]
    ];

    const emailBody = fields.map(function (field) {
      const label = field[0];
      const key = field[1];
      const value = formData.get(key) || "Not provided";
      return label + ": " + value;
    }).join("\n");

    const subject = "Freight Quote Request - D.E.W. More Logistics";

    const mailLink =
      "mailto:support@dewmorelogistics.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(emailBody);

    const status = document.getElementById("formStatus");

    if (status) {
      status.textContent =
        "Your email application should open now. " +
        "Review your shipment information and
