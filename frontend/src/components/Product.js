import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from '../components/Rating';
function Product(props) {
  const { product } = props;
  return (
    <>
      <Card key={product.slug}>
        <Link to={'/product/' + product.slug}>
          <img
            src={product.image}
            alt={product.name}
            className="card-img-top"
          />
        </Link>
        <Card.Body>
          <Link to={'/product/' + product.slug}>
            <Card.Title>{product.name}</Card.Title>
          </Link>

          <Rating rating={product.rating} numReviews={product.numReviews} />

          <Card.Text>
            <strong>{product.price}</strong>
          </Card.Text>
          <Button>Add to cart</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;
