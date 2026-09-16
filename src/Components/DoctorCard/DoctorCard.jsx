import React, { useState } from "react";

const DoctorCard = ({ name, specialty, experience, rating }) => {
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    setIsBooked(true);
    alert(`Appointment booked with ${name}`);
  };

  const handleCancellation = () => {
    setIsBooked(false);
    alert(`Appointment with ${name} has been cancelled`);
  };

  return (
    <div className="doctor-card">
      <h3>{name}</h3>

      <p>
        <strong>Specialty:</strong> {specialty}
      </p>

      <p>
        <strong>Experience:</strong> {experience} years
      </p>

      <p>
        <strong>Rating:</strong> ⭐ {rating}
      </p>

      {!isBooked ? (
        <button onClick={handleBooking}>
          Book Appointment
        </button>
      ) : (
        <button onClick={handleCancellation}>
          Cancel Appointment
        </button>
      )}
    </div>
  );
};

export default DoctorCard;