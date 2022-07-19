const Card = ({ name, age }) => {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{age}</p>
        </div>
      </div>
    );
  };
  
  export default Card;