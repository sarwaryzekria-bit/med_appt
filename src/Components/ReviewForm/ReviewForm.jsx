import React, { useState } from "react";

const ReviewForm = ({ doctorName, specialty, consultationDate }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="review-container">
      <h2>Consultation Review</h2>

      <div className="consultation-info">
        <p>
          <strong>Doctor:</strong> {doctorName}
        </p>
        <p>
          <strong>Specialty:</strong> {specialty}
        </p>
        <p>
          <strong>Date:</strong> {consultationDate}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setShowForm(!showForm)}
        className="feedback-button"
      >
        {showForm ? "Close Feedback Form" : "Give Feedback"}
      </button>

      {showForm && (
        <div className="feedback-form">
          <label htmlFor="rating">Rating</label>
          <select id="rating">
            <option value="">Select a rating</option>
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Good</option>
            <option value="3">3 - Average</option>
            <option value="2">2 - Poor</option>
            <option value="1">1 - Very Poor</option>
          </select>

          <label htmlFor="comment">Your Feedback</label>
          <textarea
            id="comment"
            placeholder="Write your feedback..."
            rows="4"
          ></textarea>

          <button type="submit" className="submit-feedback">
            Submit Feedback
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;