import React from 'react';
import './App.css';
import Navbar from './nav.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';  // Import Instagram and YouTube icons

const teamMembers = [
  { name: "John Poly", role: "Captain", desc: "A natural leader with a vision, John ensures the team stays on track and motivated.", linkedin: "https://www.linkedin.com/in/john-poly-81965031a/", image: "/images/poly.png" },
  { name: "Kevin Sinny", role: "Vice-Captain", desc: "Kevin brings strategic thinking and innovation, ensuring we stay ahead in every challenge.", linkedin: "https://www.linkedin.com/in/kevin-sinny-182921280/", image: "/images/sinny.png" },
  { name: "Harry Jeesan", role: "Member", desc: "Harry is a creative thinker who always finds new ways to solve problems.", linkedin: "https://www.linkedin.com/in/harry-jeesan-neelangavil-409771166/", image: "/images/harry.png" },
  { name: "Krishnasree K", role: "Member", desc: "With an analytical mind, Krishnasree ensures that our strategies are well-planned and executed.", linkedin: "https://www.linkedin.com/in/krishnasree-k-7282a8255/", image: "/images/kk.png" },
  { name: "Gokul P B", role: "Member", desc: "Gokul ensures seamless teamwork with her strong problem-solving skills.", linkedin: "https://www.linkedin.com/in/gokul-babu-a43908256?trk=contact-info", image: "/images/kokku1.jpeg" },
  { name: "Joyal Christy Jose", role: "Member", desc: "A team player with great communication skills, Joyal helps maintain a strong team bond.", linkedin: "https://www.linkedin.com/in/joyal-christy-jose-447946256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "/images/joyal.jpeg" },
  { name: "Gopika K S", role: "Member", desc: "Gopika's creativity and dedication bring fresh ideas and energy to the team.", linkedin: "#", image: "/images/gopika.jpeg" },
  { name: "Gayathri M A", role: "Member", desc: "Gayathri is the go-to person for technical challenges, always ready to innovate and create.", linkedin: "https://www.linkedin.com/in/gayathri-m-a-12a823256/", image: "/images/gaya.png" }
];

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="team-container">
                    {teamMembers.map((member, index) => (
                        <div className="team-member" key={index}>
                            <img src={member.image} alt={member.name} />
                            <h3>{member.name} ({member.role})</h3>
                            <p>{member.desc}</p>
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    ))}
                </div>

                {/* Instagram Section */}
                <div className="social-section">
                    <h2>Connect with Us on Instagram</h2>
                    <p>Stay updated with all our activities! Follow us on Instagram to see more of what we do.</p>
                    <a href="https://www.instagram.com/eightfold_alliance?igsh=bzB5NDB4bHI2MDg1" target="_blank" rel="noopener noreferrer">
                        <button className="social-btn">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                            Follow Us
                        </button>
                    </a>
                </div>

                {/* YouTube Section */}
                <div className="social-section">
                    <h2>Check Out Our YouTube Channel</h2>
                    <p>Watch our latest videos and stay updated with our events and activities on YouTube.</p>
                    <a href="https://youtube.com/@eightfoldalliance?si=TzXVHvdTfrESF9vl" target="_blank" rel="noopener noreferrer">
                        <button className="social-btn">
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                            Visit Channel
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default App;
