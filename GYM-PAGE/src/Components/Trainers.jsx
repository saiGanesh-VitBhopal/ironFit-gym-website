import { trainerData } from "../Data/Data";
import "../Styles/Trainer.css";

const Trainers = () => {
  return (
    <section id="trainers">
      <h2 className="section-title">Meet Our Trainers</h2>
      <div className="trainers-grid">
        {trainerData.map((trainer) => (
          <div className="trainer-card" key={trainer.id}>
            <img src={trainer.img} alt="" />
            <h3>{trainer.name}</h3>
            <p>{trainer.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
