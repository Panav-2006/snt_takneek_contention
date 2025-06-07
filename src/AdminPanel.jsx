import React from "react";
import './App.css'; // or wherever your .page-content is defined

function AdminPanel() {
  return (
    <div className="page-content">
      <h1>Welcome to the Admin Panel!</h1>
      <p>You are logged in as an admin.</p>

      {/* Any future content will also remain below the navbar */}
      <section>
        <h2>More Features Coming Soon</h2>
        <p>Stay tuned for analytics, bot submissions, and more.</p>
      </section>
    </div>
  );
}

export default AdminPanel;
