function Card({ image, name, className, hobby }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{className}</h3>
      <p className="hobby">{hobby}</p>
    </div>
  );
}

export default Card;
