import React, { useState } from "react";

const FindDoctorSearch = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [specialty, setSpecialty] = useState("");

  const specialties = [
    "Cardiologist",
    "Dermatologist",
    "Dentist",
    "Neurologist",
    "Pediatrician",
    "Psychologist",
    "General Physician",
  ];

  return (
    <div className="find-doctor-search">
      <input
        type="text"
        placeholder="Search doctor's specialty"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {isFocused && (
        <ul className="specialty-list">
          {specialties
            .filter((item) =>
              item.toLowerCase().includes(specialty.toLowerCase())
            )
            .map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default FindDoctorSearch;