import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Col } from 'react-bootstrap';  // Import Col here
import { FaStar } from 'react-icons/fa';

const RecipeCard = ({ recipe }) => {
  return (
    <Col className="d-flex justify-content-center mb-4">
      <Card style={{ width: '18rem' }} className="text-center">
        <Card.Img variant="top" src={recipe.image || "https://via.placeholder.com/150"} />
        <Card.Body>
          <Card.Title>{recipe.title}</Card.Title>
          <Card.Text>{recipe.description}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              {Array.from({ length: recipe.rating }, (_, index) => (
                <FaStar key={index} color="gold" />
              ))}
            </div>
            <a href={recipe.link} className="btn btn-primary">View Recipe</a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecipeCard;

