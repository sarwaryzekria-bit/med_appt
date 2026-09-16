import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import "./ProfileForm.css";

const ProfileForm = () => {
  const [userDetails, setUserDetails] = useState({});
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");

    if (!authtoken) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, [navigate]);

  const fetchUserProfile = async () => {
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");

      if (!authtoken) {
        navigate("/login");
        return;
      }

      const response = await fetch(`${API_URL}/api/auth/user`, {
        headers: {
          Authorization: `Bearer ${authtoken}`,
          Email: email,
        },
      });

      if (response.ok) {
        const user = await response.json();

        setUserDetails(user);
        setUpdatedDetails(user);
      } else {
        throw new Error("Failed to fetch user profile");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");

      if (!authtoken || !email) {
        navigate("/login");
        return;
      }

      const payload = { ...updatedDetails };

      const response = await fetch(`${API_URL}/api/auth/user`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authtoken}`,
          "Content-Type": "application/json",
          Email: email,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        sessionStorage.setItem("name", updatedDetails.name);
        sessionStorage.setItem("phone", updatedDetails.phone);

        setUserDetails(updatedDetails);
        setEditMode(false);

        alert("Profile Updated Successfully!");

        navigate("/");
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-container">
      {editMode ? (
        <form className="profile-card" onSubmit={handleSubmit}>
          <div className="profile-header">
            <h2>Edit Profile</h2>
          </div>

          <div className="profile-info">
            <label>
              Name
              <input
                type="text"
                name="name"
                value={updatedDetails.name || ""}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={updatedDetails.email || ""}
                disabled
              />
            </label>

            <label>
              Phone
              <input
                type="text"
                name="phone"
                value={updatedDetails.phone || ""}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      ) : (
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-image">
              {userDetails.name
                ? userDetails.name.charAt(0).toUpperCase()
                : "U"}
            </div>

            <h2>{userDetails.name || "User"}</h2>
          </div>

          <div className="profile-info">
            <p>
              <strong>Email:</strong>{" "}
              {userDetails.email || "Not available"}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {userDetails.phone || "Not available"}
            </p>
          </div>

          <button onClick={handleEdit} className="edit-button">
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileForm;