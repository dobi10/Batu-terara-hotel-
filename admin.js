function loadBookings() {
  let bookings = JSON.parse(localStorage.getItem("bookings") || "[]");

  let html = "<h2>All Bookings</h2>";

  bookings.forEach((b, i) => {
    html += `
      <div style="background:#eee;margin:10px;padding:10px">
        <b>#${i+1}</b><br>
        Name: ${b.name}<br>
        Phone: ${b.phone}<br>
        Room: ${b.room}<br>
        Check-in: ${b.checkin}<br>
        Check-out: ${b.checkout}
      </div>
    `;
  });

  document.getElementById("list").innerHTML = html;
}
