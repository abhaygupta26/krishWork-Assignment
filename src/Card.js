import Button from "./Button";

const Card = (props) => {
  return (
    <div
      className="product col-md-2"
      style={{
        border: "1px solid #D5DBDB",
        borderRadius: "10px",
        boxShadow: "0 3px 15px rgb(0 0 0 / 0.2)",
        // marginLeft: "2%",
        marginTop: "5%",
      }}
    >
      <div className="overlay_container">
        <img
          className="image"
          src="https://images-na.ssl-images-amazon.com/images/I/51RcxiQNx9L._AC_SX522_.jpg"
          style={{ height: "250px", width: "100%" }}
        ></img>
        <div className="overlay overlay_fade">
          <p className="text">this is the tea</p>
        </div>
      </div>
      <h5
        className="mt-3"
        style={{ color: "green", textAlign: "start", height: "50px" }}
      >
        {props.name}
      </h5>
      <h6 style={{ textAlign: "start" }}>{props.quantity}</h6>
      <h6 style={{ textAlign: "start" }}>{props.price}</h6>
      <Button />
    </div>
  );
};

export default Card;
