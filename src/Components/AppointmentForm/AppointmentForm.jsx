import React, { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Appointment Details:", formData);
    alert("Appointment booked successfully!");
  };

  return (
    <div className="appointment-form">
      <h2>Book an Appointment</h2>

      <form onSubmit={handleSubmit}>
        {/* Patient Name */}
        <div className="form-group">
          <label htmlFor="patientName">Patient Name</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            placeholder="Enter your name"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Appointment Date */}
        <div className="form-group">
          <label htmlFor="appointmentDate">Appointment Date</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* Appointment Time */}
        <div className="form-group">
          <label htmlFor="appointmentTime">Appointment Time</label>
          <input
            type="time"
            id="appointmentTime"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;