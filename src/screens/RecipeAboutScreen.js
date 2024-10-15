import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import recipes from '../components/recipe.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
const RecipeAboutScreen = () => {
  const { id } = useParams();  // Get the recipe ID from the URL
  const recipeIndex = parseInt(id, 10); // Convert id to a number

  const recipe = recipes[recipeIndex]; // Use the index to find the recipe

  if (!recipe) {
    return <div>Recipe not found!</div>; // Handle case where the recipe is not found
  }

  return (
    <>
    <Nav />
    <Container className="my-4">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={recipe.image} alt={recipe.title} />
          </Card>
        </Col>
        <Col md={6}>
          <h2>{recipe.title}</h2>
          <h4>Ingredients</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h4>Description</h4>
          <p>{recipe.description}</p>
          <h4>Procedure</h4>
          <p>{recipe.procedure}</p>
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  );
};

export default RecipeAboutScreen;
