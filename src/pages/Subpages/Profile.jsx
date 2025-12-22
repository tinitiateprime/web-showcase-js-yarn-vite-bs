import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePage = () => {
  const initialProfile = {
    name: "Keishna Reddy",
    email: "keishna@example.com",
    title: "Full Stack Developer",
    location: "Hyderabad, India",
    bio: "Passionate about building interactive maps and modern web applications. Love React, Node.js, and clean UI.",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  const [profile, setProfile] = useState(initialProfile);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditMode(false);
    // You can send `profile` to a backend here if needed
    alert("Profile saved!");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "40px 20px",
        fontFamily: "Segoe UI, sans-serif",
        color: "#fff",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "800px",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
          padding: "30px",
        }}
      >
        {/* Header */}
        <div className="text-center mb-4">
          <img
            src={profile.avatar}
            alt="Avatar"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "4px solid #fff",
              objectFit: "cover",
              boxShadow: "0 0 20px rgba(255,255,255,0.3)",
              animation: "fadeIn 1.2s ease",
            }}
          />
          {editMode ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="form-control mt-3 text-center"
              style={{ maxWidth: "300px", margin: "auto" }}
            />
          ) : (
            <h2 className="mt-3 fw-bold">{profile.name}</h2>
          )}
          <p className="text-light mb-1">{profile.title}</p>
          <p className="text-light small">{profile.location}</p>
          <button
            className="btn btn-outline-light mt-3"
            onClick={() => (editMode ? handleSave() : setEditMode(true))}
          >
            {editMode ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        {/* Stats */}
        <div className="row text-center text-light mb-4">
          <div className="col-4">
            <h5 className="fw-bold">12</h5>
            <p className="small">Projects</p>
          </div>
          <div className="col-4">
            <h5 className="fw-bold">48</h5>
            <p className="small">Tasks</p>
          </div>
          <div className="col-4">
            <h5 className="fw-bold">92%</h5>
            <p className="small">Success Rate</p>
          </div>
        </div>

        {/* Editable Info */}
        <div className="bg-light text-dark rounded p-4 shadow-sm">
          <h5 className="fw-bold mb-3">About</h5>
          {editMode ? (
            <>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                className="form-control mb-3"
                rows={3}
              />
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="Email"
              />
              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleChange}
                className="form-control"
                placeholder="Location"
              />
            </>
          ) : (
            <>
              <p>{profile.bio}</p>
              <hr />
              <p>
                <strong>Email:</strong> {profile.email}
              </p>
              <p>
                <strong>Location:</strong> {profile.location}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default ProfilePage;
