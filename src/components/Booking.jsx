import React from "react";
 // create a separate CSS file if needed

const bookings = [
  { id: 1, title: "Construction", price: "Rs-1000/", image: "Image (1).png" },
  { id: 2, title: "Interior Design", price: "Rs-2000/", image: "Image (2).png" },
  { id: 3, title: "Architecture", price: "Rs-3000/", image: "Image (3).png" },
  { id: 4, title: "Vastu Area", price: "Rs-4000/", image: "Image (4).png" },
];

export default function Booking() {
  return (
    <div className="booking-grid">
      {bookings.map((booking) => (
        <div key={booking.id} className="booking-card">
          <img src={booking.image} alt={booking.title} />
          <div className="booking-info">
            <div>
              <p className="tag">{booking.title}</p>
              <p>Starts at {booking.price}</p>
            </div>
            <button>Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}
