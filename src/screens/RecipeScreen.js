import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RecipeCard from '../components/card.js';
import recipes from '../components/recipe.js';
const RecipeScreen = () => {
  return (
    <Container>
      <h1 className="my-4 text-center">Recipe To Choose From</h1>
      <Row className="d-flex justify-content-center">
        {recipes.map((recipe, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={3} className="mb-4">
            <RecipeCard recipe={recipe} index={index} /> {/* Pass index */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecipeScreen;
