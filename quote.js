
(() => {
  const form = document.getElementById("quoteForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const fields = [
      ["Contact", "contactName"],
      ["Company", "company"],
      ["Email", "email"],
      ["Phone", "phone"],
      ["Service", "service"],
      ["Pickup date", "pickupDate"],
      ["Pickup location", "pickup"],
      ["Delivery location", "delivery"],
      ["Estimated weight", "weight"],
      ["Dimensions", "dimensions"],
      ["Shipment details", "details"]
    ];

    const body = fields
      .map(([label, key]) => {
        return `${label}: ${data.get(key) || "Not provided"}`;
      })
      .join("\n");

    const subject = `Freight Quote Request - ${data.get("service")}`;

    const mailto =
      "mailto:support@dewmorelogistics.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    document.getElementById("formStatus").textContent =
      "Your email app should open now. Review and press Send to submit your request.";

    window.location.href = mailto;
  });
})();
