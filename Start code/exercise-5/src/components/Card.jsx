<<<<<<< HEAD
function Card({ image, name, hobby, address }) {
=======
function Card({ image, name, className, hobby }) {
>>>>>>> 9f184f8 (week5)
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
<<<<<<< HEAD
      <p>{hobby}</p>
      <p>{address}</p>
=======
      <h3>{className}</h3>
      <p className="hobby">{hobby}</p>
>>>>>>> 9f184f8 (week5)
    </div>
  );
}

export default Card;
