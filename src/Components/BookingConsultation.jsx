import React from "react";
import DoctorCard from "./components/DoctorCard";
import FindDoctorSearch from "./components/FindDoctorSearch";

const BookingConsultation = () => {
  const doctors = [
    {
      name: "Dr. Jiao Yang",
      specialty: "Cardiologist",
      experience: 10,
      rating: 4.9,
    },
    {
      name: "Dr. Denis Raj",
      specialty: "Dermatologist",
      experience: 8,
      rating: 4.8,
    },
    {
      name: "Dr. Anna Christie",
      specialty: "Neurologist",
      experience: 7,
      rating: 4.7,
    },
    {
      name: "Dr. Robert Smith",
      specialty: "Dentist",
      experience: 12,
      rating: 4.9,
    },
    {
      name: "Dr. Emily Carter",
      specialty: "Pediatrician",
      experience: 6,
      rating: 4.8,
    },
  ];

  return (
    <div className="booking-consultation">
      <h1>Find a Doctor</h1>

      {/* Doctor Search */}
      <FindDoctorSearch />

      {/* Doctor Cards */}
      <div className="doctor-list">
        {doctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            name={doctor.name}
            specialty={doctor.specialty}
            experience={doctor.experience}
            rating={doctor.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default BookingConsultation;