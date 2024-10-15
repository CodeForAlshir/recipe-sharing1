import img1 from '../static/image/1.jpg';
import img2 from '../static/image/2.jpg';
import img3 from '../static/image/3.jpg';
import img4 from '../static/image/4.jpg';
import img5 from '../static/image/5.jpg';
import img6 from '../static/image/6.jpg';
import img7 from '../static/image/7.jpg';
import img8 from '../static/image/8.jpg';
import img9 from '../static/image/9.jpg';
import img10 from '../static/image/10.jpg';
import img11 from '../static/image/11.jpg';
import img12 from '../static/image/12.jpg';

const recipes = [
    {
        title: 'Spaghetti Bolognese',
        description: 'A delicious classic Italian dish.',
        rating: 5,
        image: img1,
        ingredients: [
            '200g spaghetti',
            '100g minced beef',
            '1 onion, chopped',
            '2 garlic cloves, minced',
            '400g can of tomatoes',
            'Salt and pepper to taste',
            'Olive oil',
        ],
        procedure: '1. Cook the spaghetti according to the package instructions. 2. In a pan, heat the olive oil and sauté the onion and garlic until soft. 3. Add the minced beef and cook until browned. 4. Stir in the tomatoes and simmer for 20 minutes. 5. Serve the sauce over the spaghetti.',
        link: '/recipe/0', 
    },
  {
    title: 'Chicken Curry',
    description: 'A flavorful Indian-inspired recipe.',
    rating: 4,
    image: img2,
    ingredients: [
      '500g chicken, cubed',
      '2 onions, chopped',
      '3 garlic cloves, minced',
      '2 tsp curry powder',
      '400ml coconut milk',
      'Salt to taste',
      'Oil',
    ],
    procedure: '1. Heat oil in a pan. 2. Sauté onions and garlic until soft. 3. Add chicken and curry powder, cook until browned. 4. Pour in coconut milk and simmer for 20 minutes. 5. Serve with rice.',
    link: '/recipe/1', 
  },
  {
    title: 'Tacos',
    description: 'Tasty Mexican street food.',
    rating: 4,
    image: img3,
    ingredients: [
      '8 taco shells',
      '500g minced beef',
      '1 onion, chopped',
      '2 tomatoes, diced',
      'Lettuce, shredded',
      'Cheese, grated',
      'Salsa',
    ],
    procedure: '1. Cook minced beef and onions in a pan. 2. Fill taco shells with the mixture. 3. Top with tomatoes, lettuce, cheese, and salsa.',
    link: '/recipe/2', 
  },
  {
    title: 'Chocolate Cake',
    description: 'A rich and moist dessert.',
    rating: 5,
    image: img4,
    ingredients: [
      '200g sugar',
      '175g flour',
      '75g cocoa powder',
      '1 tsp baking powder',
      '2 eggs',
      '100g butter',
      'Milk as needed',
    ],
    procedure: '1. Preheat oven to 180°C. 2. Mix all ingredients until smooth. 3. Pour into a greased cake tin. 4. Bake for 30 minutes.',
    link: '/recipe/3', 
  },
  {
    title: 'Chocolate Chip Cookies',
    description: 'A classic chocolate cookie recipe.',
    rating: 5,
    image: img5,
    ingredients: [
      '200g butter',
      '150g sugar',
      '1 egg',
      '300g flour',
      '200g chocolate chips',
    ],
    procedure: '1. Preheat oven to 180°C. 2. Cream butter and sugar. 3. Add egg and mix. 4. Stir in flour and chocolate chips. 5. Bake for 10-12 minutes.',
    link: '/recipe/4', 
  },
  {
    title: 'Fried Chicken',
    description: 'A simple fried chicken recipe.',
    rating: 4,
    image: img6,
    ingredients: [
      '4 chicken pieces',
      '1 cup flour',
      '1 tsp salt',
      '1 tsp pepper',
      'Oil for frying',
    ],
    procedure: '1. Season flour with salt and pepper. 2. Dredge chicken pieces in flour. 3. Heat oil and fry chicken until golden brown.',
    link: '/recipe/5', 
  },
  {
    title: ' Cajun Fries',
    description: 'Tasty cajun fries.',
    rating: 4,
    image: img7,
    ingredients: [
      '4 large potatoes',
      '2 tbsp cajun seasoning',
      'Oil for frying',
    ],
    procedure: '1. Cut potatoes into fries. 2. Toss with cajun seasoning. 3. Fry in hot oil until golden.',
    link: '/recipe/6', 
  },
  {
    title: 'Kare Kare',
    description: 'A Filipino classic dish.',
    rating: 5,
    image: img8,
    ingredients: [
      '500g oxtail, cut into pieces',
      '1 cup peanut butter',
      '1 onion, chopped',
      '1 eggplant, sliced',
      '1 banana heart, sliced',
      'Salt to taste',
    ],
    procedure: '1. Boil oxtail until tender. 2. In a separate pot, sauté onions. 3. Add oxtail and peanut butter, simmer for 10 minutes. 4. Add vegetables and cook until tender.',
    link: '/recipe/7', 
  },
  {
    title: 'Eggs Benedict',
    description: 'A simple egg recipe.',
    rating: 5,
    image: img9,
    ingredients: [
      '2 eggs',
      '2 English muffins',
      '100g ham',
      'Hollandaise sauce',
    ],
    procedure: '1. Poach eggs. 2. Toast muffins and layer with ham. 3. Top with poached eggs and hollandaise sauce.',
    link: '/recipe/8', 
  },
  {
    title: 'Lemonade',
    description: 'An easy and refreshing drink.',
    rating: 4,
    image: img10,
    ingredients: [
      '1 cup lemon juice',
      '1 cup sugar',
      '4 cups water',
    ],
    procedure: '1. Mix lemon juice and sugar until dissolved. 2. Add water and serve chilled.',
    link: '/recipe/9', 
  },
  {
    title: 'Carrot Cake',
    description: 'Tasty carrot cake.',
    rating: 4,
    image: img11,
    ingredients: [
      '200g grated carrots',
      '200g sugar',
      '150g flour',
      '3 eggs',
      '100ml oil',
    ],
    procedure: '1. Preheat oven to 180°C. 2. Mix all ingredients. 3. Pour into a greased cake tin. 4. Bake for 30-35 minutes.',
    link: '/recipe/10', 
  },
  {
    title: 'Shanghai',
    description: 'A classic Filipino spring roll.',
    rating: 5,
    image: img12,
    ingredients: [
      '300g minced pork',
      '1 cup carrots, grated',
      '1 onion, minced',
      'Spring roll wrappers',
    ],
    procedure: '1. Mix pork, carrots, and onion. 2. Wrap in spring roll wrappers. 3. Fry until golden brown.',
    link: '/recipe/11', 
  },  
];

export default recipes;
