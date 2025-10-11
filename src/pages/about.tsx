import TiltedCard from "../components/TiltedCard";
import "./styles/about.css";

const teamMembers = [
  {
    name: "Vedeshwari Nakate",
    role: "Chair",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jeevita",
    role: "Vice chair",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "???",
    role: "Secretary",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sai krishna s",
    role: "Treasurer",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Ankit Gupta",
    role: "Event coordinator 1",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Megha Joshi",
    role: "Tech Lead",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Vivek Kumar",
    role: "Design Lead",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Riya Mehta",
    role: "PR Lead",
    img: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Aman Singh",
    role: "Research Lead",
    img: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Simran Kaur",
    role: "Workshop Lead",
    img: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Karan Malhotra",
    role: "Outreach",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Neha Agarwal",
    role: "Member",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">About IEEE ITSoc Student Chapter</h1>
        <p className="about-description">
          We are a passionate group of 12 students dedicated to advancing
          information theory and technology through collaborative learning,
          workshops, and innovative projects. Meet our team below!
        </p>
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <TiltedCard
              key={idx}
              imageSrc={member.img}
              altText={member.name}
              captionText={`${member.name} - ${member.role}`}
              containerHeight="320px"
              imageHeight="320px"
              imageWidth="320px"
              scaleOnHover={1.08}
              rotateAmplitude={12}
              showMobileWarning={false}
              showTooltip={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
