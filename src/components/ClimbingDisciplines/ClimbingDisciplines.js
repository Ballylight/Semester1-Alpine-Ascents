import React, { useState } from "react";
import "./ClimbingDisciplines.css";
import alpine from "../../images/alpine.svg";
import expedition from "../../images/expedition.svg";
import iceclimbing from "../../images/iceclimbing.svg";
import rockclimbing from "../../images/rockclimbing.svg";
import ski from "../../images/ski.svg";
import high from "../../images/high.svg";
import mixed from "../../images/mixed.svg";
import bigwall from "../../images/bigwall.svg";
import { FaHiking } from "react-icons/fa";

const ClimbingDisciplines = () => {
  const disciplines = [
    {
      title: "Alpine Mountaineering",
      technique: "Fast and Light Ascent",
      hazard: "Exposure to extreme weather conditions",
      image: alpine,
      rating: 4.5,
      description:
        "Alpine Mountaineering involves scaling rugged peaks with minimal gear, emphasizing speed and efficiency. It tests a climber's endurance, adaptability, and navigation skills in diverse terrains, from icy slopes to rocky ridges.",
    },
    {
      title: "Expedition Mountaineering",
      technique: "Fixed Rope Setup",
      hazard: "Altitude sickness during prolonged climbs",
      image: expedition,
      rating: 4.8,
      description:
        "Expedition Mountaineering is about conquering the world's tallest peaks through careful planning and teamwork. Climbers establish camps and use fixed ropes to tackle challenging ascents over weeks or months.",
    },
    {
      title: "Ice Climbing",
      technique: "Ice Tool Placement",
      hazard: "Falling ice shards during ascents",
      image: iceclimbing,
      rating: 5.0,
      description:
        "Ice Climbing combines technical skill and strength, as climbers ascend frozen waterfalls and icy cliffs. Using ice tools and crampons, this discipline demands precision, balance, and adaptability in cold environments.",
    },
    {
      title: "Rock Climbing",
      technique: "Lead Climbing",
      hazard: "Falling due to gear failure or misplacement",
      image: rockclimbing,
      rating: 4.3,
      description:
        "Rock Climbing focuses on ascending vertical rock walls using ropes, harnesses, and climbing holds. From bouldering to lead climbing, it challenges strength, problem-solving, and mental resilience.",
    },
    {
      title: "Ski Mountaineering",
      technique: "Skinning",
      hazard: "Avalanche risk on steep snow slopes",
      image: ski,
      rating: 4.7,
      description:
        "Ski Mountaineering combines alpine skiing with mountaineering skills. Climbers ascend snowy terrains with skins on their skis and then ski down challenging slopes, blending adventure and technique.",
    },
    {
      title: "Altitude Climbing",
      technique: "Acclimatization",
      hazard: "Hypoxia due to low oxygen levels",
      image: high,
      rating: 5.0,
      description:
        "Altitude Climbing involves scaling peaks at extreme altitudes where oxygen levels are low. Climbers must acclimatize to avoid altitude sickness, making it a test of physical and mental endurance.",
    },
    {
      title: "Mixed Climbing",
      technique: "Dry Tooling",
      hazard: "Equipment failure on mixed surfaces",
      image: mixed,
      rating: 4.8,
      description:
        "Mixed Climbing is a hybrid of rock and ice climbing, requiring climbers to navigate both surfaces with specialized tools. It pushes climbers to their limits with its unique combination of techniques and challenges.",
    },
    {
      title: "Big Wall Climbing",
      technique: "Aid Climbing",
      hazard: "Prolonged exposure to sheer drops",
      image: bigwall,
      rating: 4.9,
      description:
        "Big Wall Climbing involves ascending massive vertical rock faces over several days. Climbers rely on aid climbing techniques, hauling gear, and sleeping on portaledges to conquer these towering walls.",
    },
  ];

  return (
    <section className="climbing-section">
      <h2 className="section-title">Explore Climbing Disciplines</h2>
      <p className="section-subtitle">
        Discover the diverse climbing styles and the techniques that make each
        unique. Challenge yourself with exciting disciplines in iconic locations.
      </p>

      <div className="disciplines-container">
        {disciplines.map((discipline, index) => (
          <FlipCard key={index} discipline={discipline} />
        ))}
      </div>
    </section>
  );
};

const FlipCard = ({ discipline }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`discipline-card ${isFlipped ? "flipped" : ""}`}>
      {/* Front of the Card */}
      <div className="card-front">
        <img
          src={discipline.image}
          alt={discipline.title}
          className="discipline-image"
        />
        <span className="rating">⭐ {discipline.rating}</span>
        <div className="discipline-content">
          <h3 className="discipline-title">{discipline.title}</h3>
          <p className="discipline-technique">
            <FaHiking className="hiking-icon" />
            <span>{discipline.technique}</span>
          </p>
          <div className="card-footer">
            <button
              className="see-more-btn"
              onClick={(e) => {
                e.stopPropagation(); // Prevents triggering the parent click
                setIsFlipped(true);
              }}
            >
              See more
            </button>
          </div>
        </div>
      </div>

      {/* Back of the Card */}
      <div className="card-back">
        <p className="card-description">{discipline.description}</p>
        <p className="card-hazard">
          <strong>Hazard:</strong> {discipline.hazard}
        </p>
        <button
          className="flip-back-btn"
          onClick={(e) => {
            e.stopPropagation(); // Prevents triggering the parent click
            setIsFlipped(false);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ClimbingDisciplines;
