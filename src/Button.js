import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Button = () => {
  return (
    <div className="button mb-3 mt-3" style={{ textAlign: "center" }}>
      <button
        className="btn btn-outline-secondary"
        style={{
          borderRadius: "25px",
          backgroundColor: "#F9A739",
          color: "black",
        }}
      >
        <div className="row">
          <div className="col-md-2">
            <FontAwesomeIcon icon={faCartShopping} style={{}} />
          </div>
          <div className="col-md-10">Add to Cart</div>
        </div>
      </button>
    </div>
  );
};

export default Button;
