function bookRoom() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let room = document.getElementById("room").value;
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;

  if (!name || !phone || !checkin || !checkout) {
    document.getElementById("msg").innerText = "Please fill all fields";
    return;
  }

  let booking = {
    name,
    phone,
    room,
    checkin,
    checkout
  };

  // Save locally (temporary database)
  let bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  document.getElementById("msg").innerText = "Booking Successful ✔";

  // WhatsApp message to hotel
  let message =
`New Booking:
Name: ${name}
Phone: ${phone}
Room: ${room}
Check-in: ${checkin}
Check-out: ${checkout}`;

  let url = "https://wa.me/251911550553?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
