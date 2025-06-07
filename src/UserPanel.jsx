import React from "react";
import './App.css'; // Adjust if the CSS file is named differently

function UserPanel() {
  return (
    <div className="page-content">
      <h1>Welcome to the User Panel!</h1>
      <p>You are logged in as a user.</p>

      {/* Future content stays below the navbar */}
      <section>
        <h2>Upcoming Matches</h2>
        <p>Keep an eye on match schedules, leaderboard, and submissions.</p>
      </section>
    </div>
  );
}

export default UserPanel;
