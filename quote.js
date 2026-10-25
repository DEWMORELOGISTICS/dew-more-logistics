
/*
 D.E.W. MORE LOGISTICS LLC
 Freight Quote Request Form
*/

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("quoteForm");

  if (!form) return;

  form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const fields = [
      ["Full Name", "contactName"],
      ["Company", "company"],
      ["Email", "email"],
      ["Phone", "phone"],
      ["Service", "service"],
      ["Pickup Date", "pickupDate"],
      ["Pickup Location", "pickup"],
      ["Delivery Location", "delivery"],
      ["Weight", "weight"],
      ["Dimensions", "dimensions"],
      ["Shipment Details", "details"]
    ];

    const body = fields.map(function (field) {
      const title = field[0];
      const key = field[1];
      return title + ": " +
        (data.get(key) || "Not provided");
    }).join("\n");

    const subject =
      "Freight Quote Request - " + data.get("service");

    const status = document.getElementById("formStatus");

    if (status) {
      status.textContent =
        "Your email application should open. " +
        "Please review and press Send to submit your request.";
    }

    const emailLink =
      "mailto:support@dewmorelogistics.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    window.location.href = emailLink;

  });

});

