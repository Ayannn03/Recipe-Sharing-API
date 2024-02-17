const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
const Joi = require('joi');
app.use(express.json());

const recipe = [ 
  {
  
    name: 'Pork Adobo',
    Ingredients: '1 ½ lb. pork belly cubed, 1 ½ teaspoons whole peppercorn, 5 to 6 pieces dried bay leaves, 6 to 8 cloves garlic crushed, 5 tablespoons soy sauce , 3 tablespoons coconut vinegar, 1 ½ cup water or beef broth, 3 tablespoons cooking oil, Salt to taste optional',
    Instructions: 'Heat the oil in a cooking pot., Add the garlic. Cook until it starts to turn light brown, Add the peppercorns and bay leaves. Continue to cook for 20 seconds so that its flavors get infused in the oil., Put the pork belly in the cooking pot. Stir and cook until  it turns light brown. Note: check the garlic and make sure that it does not get burnt. Adjust heat if necessary. , Pour the soy sauce and beef broth (or water). Let boil.   Cover and cook in low heat for 40 minutes or until  the pork gets tender. Add more beef broth or water if the liquid starts to dry quickly., Pour-in the vinegar. Let the liquid re-boil. Stir and cook for 8 minutes., Taste your pork adobo and decide to add salt if needed., Transfer to a serving plate. Serve. , Share and enjoy! ',
  },
  {

    name: 'Nilagang Baboy',
    Ingredients: '2 lbs. pork belly or shoulder cubed , 1 medium yellow onion, 1 medium cabbage quartered, 2 medium potatoes peeled and cubed, 4 pieces ripe saba banana sliced in half crosswise, 6 to 8 cups beef or pork broth, 1 teaspoon whole peppercorn, Salt to taste ,3 tablespoons cooking oil',
    Instructions:'Heat the cooking oil in a deep cooking pot., Once the oil becomes hot, saute the onion., Add the whole pepper corn. Continue to cook for 20 seconds., Put-in the pork. Cook until the color turns light brown (about 3 to 5 minutes)., Pour-in the beef or pork broth. Bring to a boil. Simmer for 45 to 60 minutes or until the pork becomes tender., Add the saba banana and potatoes. Stir and cook for 12 minutes., Put-in the cabbage. Add salt to taste. Stir. Cover and continue to cook for 3 minutes., Transfer to a serving bowl. Serve with a spicy fish sauce dipping sauce., Share and enjoy!',
  },
  {
    
    name: 'Sinampalukang Manok',
    Ingredients: '1 to 1 1/2 lb chicken sliced into serving pieces, 2 cups fresh spinach, 3 medium tomatoes quartered, 2 tablespoons fish sauce, 1 1/2 cups tamarind leaves, 1/2 lb long green beans or string beans, 1 medium Chinese eggplant sliced, 1 medium onion sliced, 1 tablespoon sinigang mix optional, 1 chicken bouillon, 3 tablespoons cooking oil, 3 to 4 cups water',
    Instructions:'Heat oil in a cooking pot., Saute onion and tomatoes., When the onions and tomatoes becomes soft, add the chicken and then cook until the color of the outer part turns light brown., Pour-in the fish sauce, and then add chicken bouillon. Stir. Pour-in water and let boil., Add tamarind leaves and sinigang mix powder. Simmer until chicken becomes tender., Add the eggplant and long green beans. Cook for 5 to 8 minutes., Put-in the spinach and cover the cooking pot. Let the cover stay for 5 to 6 minutes for the residual heat to cook the spinach., Transfer to a serving bowl. Serve., Share and enjoy!',
  },
  {
    
    name: 'Nilagang Baboy',
    Ingredients: '2 lbs. pork belly or shoulder cubed , 1 medium yellow onion, 1 medium cabbage quartered, 2 medium potatoes peeled and cubed, 4 pieces ripe saba banana sliced in half crosswise, 6 to 8 cups beef or pork broth, 1 teaspoon whole peppercorn, Salt to taste ,3 tablespoons cooking oil',
    Instructions:'Heat the cooking oil in a deep cooking pot., Once the oil becomes hot, saute the onion., Add the whole pepper corn. Continue to cook for 20 seconds., Put-in the pork. Cook until the color turns light brown (about 3 to 5 minutes)., Pour-in the beef or pork broth. Bring to a boil. Simmer for 45 to 60 minutes or until the pork becomes tender., Add the saba banana and potatoes. Stir and cook for 12 minutes., Put-in the cabbage. Add salt to taste. Stir. Cover and continue to cook for 3 minutes., Transfer to a serving bowl. Serve with a spicy fish sauce dipping sauce., Share and enjoy!',
  },
  
];

app.get('/api/recipes',(req,res)=>{
  res.send(recipe);
});

app.get('/api/recipes/:name', (req, res) => {
  const recipeToFind = recipe.find((r) => r.name === req.params.name);
  if (!recipeToFind) return res.status(404).send('Recipe not found.');
  res.send(recipeToFind);
});


// Validation middleware for the POST request
const validateRecipe = [
  body('name').notEmpty().withMessage('Dish name is required'),
  body('ingredients').notEmpty().withMessage('Ingredients are required'),
  body('instructions').notEmpty().withMessage('Procedure is required'),
];

// Route to handle POST requests for creating a new recipe with validation
app.post('/api/recipes', validateRecipe, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res
    .status(400)
    .send('Complete the Recipe information');
    return;
  }

  // If validation passes, proceed with handling the recipe submission logic
  const { name, ingredients, procedure } = req.body;
  // Handle the recipe submission logic here
  // ...

  // Send a response back to the client
  res.json({ message: 'Recipe submitted successfully' });
});

// Route to handle PUT requests for updating a recipe
app.put('/api/recipes/:name', (req, res) => {
  const recipeToUpdate = recipe.find((r) => r.name === req.params.name);

  if (!recipeToUpdate) {
    return res.status(404).send('Recipe not found');

  }

  const schema = Joi.object({
    name: Joi.string().required(),
    ingredients: Joi.string().required(),
    instructions: Joi.string().required(),
   
  });

  const result = schema.validate(req.body);

  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }

  // Update the recipe properties
  recipeToUpdate.name = req.body.name;
  recipeToUpdate.Ingredients = req.body.ingredients;
  recipeToUpdate.Instructions = req.body.instructions;

  res.send(recipeToUpdate);
  res.send('Recipe Sucessfully Updated')
});
// Route to handle DELETE requests for deleting a recipe
app.delete('/api/recipes/:name', (req, res) => {
  const recipeToDelete = recipe.find((r) => r.name === req.params.name);

  if (!recipeToDelete) {
    return res.status(404).send('Recipe not found');
  }

  // Delete the recipe from the array
  recipe.splice(recipe.indexOf(recipeToDelete), 1);

  // Send a response back to the client
  res.send('Recipe Successfully Deleted');
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Listening on https://localhost:${port}...`)
);
