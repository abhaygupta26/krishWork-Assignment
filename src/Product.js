import Card from "./Card";

const Product = (props) => {
  return (
    <div className="container-fluid" style={{ border: "1px solid black" }}>
      <div className="row">
        <Card
          name="Darjeeling First Flush Tea"
          quantity="100gms"
          price="Rs 465/-"
        />
        <Card
          name="Darjeeling Second Flush Tea"
          quantity="100gms"
          price="Rs. 350/-"
        />
        <Card
          name="Darjeeling Aromatic Leaf Tea"
          quantity="250gms"
          price="Rs. 260/-"
        />
        <Card name="Assam Prime CTC" quantity="500gms" price="Rs. 140/-" />
        <Card name="Assam Premium CTC" quantity="500gms" price="Rs. 220/-" />
        <Card name="Bengal Dark Tea" quantity="500gms" price="Rs. 360/-" />
        <Card name="Great Grean Tea" quantity="500gms" price="Rs. 420/-" />
      </div>
    </div>
  );
};

export default Product;
