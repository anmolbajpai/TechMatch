
import React from 'react';
import './Profile.css';
import profile from './profile.png';

const Profile = () => {
    return (
        <div className="home-container">
            <main className="home-main">
                <aside className="profile-sidebar">
                <img src={profile} alt="sms" height="110px" />
                    <h2>Your Profile</h2>
                    <button>About</button>
                </aside>
                <section className="profile-details">
                    <div className="card">Skills</div>
                    <div className="card">Projects</div>
                    <div className="card">Coding Profiles</div>
                    <div className="card">Achievements</div>
                </section>
                <section className="profile-extra">
                    <div className="extra-section">Your Connections</div>
                    <div className="extra-section">Collaborative Projects</div>
                </section>
            </main>
        </div>
    );
};

export default Profile;
