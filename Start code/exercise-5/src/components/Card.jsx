function Card({ image, name, hobby, address }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{hobby}</p>
      <p>{address}</p>
    </div>
  );
}

export default Card;
