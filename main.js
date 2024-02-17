const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
const Joi = require('joi');
app.use(express.json());


//List of Recipes
const rconst recipe = [ 
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
    name: 'Pork Menudo',
    Ingredients:'1/4 cup cooking oil, separated 2 pcs potatoes, medium sized, cut in cubes, 1 pc carrot, medium sized, cut in cubes, 6 cloves garlic, minced, 1 pc onion, minced, 250 grams pork kasim, cut into small cubes, 250 grams pork liempo, cut into small cubes, 250 grams pork liver, cut in small cubes, 1 (250 g) pack tomato sauce, 2 pcs Knorr Pork Broth Cube, 1 1/2 cups water, 1 tsp sugar ground black pepper to taste, 2 tbsp raisins, 1 cup cubed red and green bell pepper, Optional: 2 bunches Bok-choi, sliced',
    Instructions:'Heat up a pan over medium heat. Add 1 tablespoon of oil and sauté onion and garlic until fragrant., Add the remaining oil and let it heat up before adding the pork kasim and pork liempo., Fry until lightly browned and then add the pork liver. Cook for about 2 minutes., Add the Knorr Pork Cubes into the pot and stir well until completely dissolved. Then add the tomato sauce, water, sugar, and black pepper. Mix well., Add the carrots and potatoes into the pan. Cook over low heat until the meat and vegetables are cooked through and the sauce has thickened., Add raisins, bell pepper, and bok choy, if using. Let the pork menudo cook for 2 more minutes. Take off the heat and prepare to serve.',

  },
  {
    name: 'Grilled Pork',
    Ingredients: '500 g pork cutlets, skin and fat trimmed, 5 tbsp Knorr Liquid Seasoning, ground black pepper',
    Instructions:'Lets start by combining Knorr Liquid Seasoning and ground pepper in a small sealable bag or a bowl and place the pork cutlet to marinate. Keep in the marination for at least 20 minutes to get full flavor and taste., Remove the pork cutlets from the marination, and place on a grill. Grill for 3-5 minutes per side, depending on the thickness of the cuts. Brush on the marination if the cuts become dry while grilling., Serve hot and Enjoy!',

  },
  {
    name: 'Pork Paksiw Recipe',
    Ingredients: '½ kg lean pork, cut into serving pcs., 2 cups liver sauce, ¼ cup vinegar, ½ cup brown sugar, 3- 4 tbsp Knorr Liquid Seasoning, 360 ml water, 1 pc. Knorr Pork Cube, 1 tsp whole black peppercorns, 3 pcs. bay leaves',
    Instructions:'Another reason why you should make this dish often is because it’s so easy and delicious. You just need to combine all the ingredients in a pot and bring it all to a boil. Reduce the heat to a simmer and cook until the pork is fork tender and the sauce is nice and thick., Next, you just need to taste the seasoning and adjust if necessary., Something as delicious as this is best enjoyed with the company of family and friends, so bring this dish to your next gathering and everybody will surely ask for the recipe.',

  },
  {
    name: 'Ginataang Gulay',
    Ingredients:'1 tbsp cooking oil, 1/2 pc onion, chopped, 1 clove garlic, chopped, 1/4 pc kalabasa, peeled and cubed, 1/2 bunch sitaw, sliced into 2 inches long, 1 (29 g) pack Knorr Ginataang Gulay Mix, dissolved in 1 cup water, 1 pc small small green siling haba, sliced, Optional: 1 cup malunggay leaves ,1/4 cup shrimp, peeled',
    Instructions:'Begin by getting your pan nice and hot over medium heat. Pour some oil and throw in the onion and garlic. Cook until the onion is soft and the garlic is golden brown., Gently add the kalabasa and sitaw and pour in the dissolved Knorr Complete Recipe Mix and siling haba. Stir well and cover until the vegetables are half cooked., Throw in the malunggay leaves and shrimps and then continue to simmer until kalabasa and shrimps are fully cooked. And there you have it!, Ginataang Gulay is the perfect complement to any of your favourite dishes. You can simply have it as is. Like home, it’s a comfort dish!',

  },
  {
    
    name: 'Kare-Kare',
    Ingredients: '1 -1.5 kilogram oxtail, cut-ups, 2 pcs onions, quartered, water, enough to cover the meat, 4 tbsp canola oil, 2 tbsp annatto seeds /achuete seeds, 1 pc onion, chopped, 10 cloves garlic, chopped, 1/2 cup creamy or unsweetened peanut butter, 2 pcs Knorr Beef Cubes, 3 pcs eggplants, sliced, 1 bundle sitaw, cut into 2" pieces, 1 pack pechay Tagalog, sliced or Bok-Choy, Other vegetables to include: Pumpkin flowers, spinach',
    Instructions:'First, you need to tenderize the oxtail to be able to enjoy this majestic dish. Get a pot and throw the oxtail and quartered onions in. Pour the water, boil over high heat, and then reduce to a simmer until the oxtail is tender. Make sure that the meat is submerged to allow even cooking. Once tender, strain the oxtail from the broth and set aside the meat and broth., Now, get a pan and combine the oil and annatto seeds. Cook over low heat for 3 minutes or until the color of the oil turns orange. Strain out the seeds, then pour the infused oil back into the pan. Throw in the onions and garlic and sauté until lightly toasted. Add the softened oxtail next and continue to sauté., Just a few more steps, and this dish is done. Add your favorite peanut butter brand, 1-1/2 cups of broth (where oxtail was softened), and Knorr Beef Cubes. Mix well until peanut butter is dissolved. Simmer for 15-20 minutes until the sauce has slightly thickened., Add the vegetables last and cook until done. Thats it! Classic Kare-Kare is best enjoyed with a serving of warm bagoong. We kid you not, and you will definitely eat more than usual. So, prepare a large pot of rice nearby for those extra servings., Besides opting for oxtail as your primary protein source for the dish, other alternatives like seafood as well as Lechon Kawali also speed up the prep work. You can even pre-make the sauce and store it in your freezer until ready for use. This little hack ensures you save even more time while allowing you to serve homecooked meals to loved ones as quickly as it would take if you had ordered out., Since this dish contains peanuts, it is best to serve and consume it immediately to avoid spoilage. Another way to steer clear of this problem is to plate the Kare-Kare with the cooked vegetables on the side instead of mixing it into the sauce. Hopefully, Knorr’s easy Kare-Kare recipe encourages you to try it out and if you are looking for a unique way to serve this at your next gathering, consider pairing it with some Bagoong Rice.',
  },
  {
    
    name: 'Chicken Inasal',
    Ingredients: '1⁄2 kg chicken, cut into serving pcs., 1 cup cane vinegar, 6 cloves garlic, chopped, 1 pc ginger, grated, 2 stalks lemongrass (tanglad), pounded and sliced 4 tbsp brown sugar, 1/4 cup annatto (achuete) oil, 1 pc Knorr Chicken Cube, mashed',
    Instructions:'It is true that the simplest of dishes are the most delicious. For example, we have this Chicken Inasal recipe which can be made with only 2 steps. Place the chicken pieces in a food grade plastic container along with the cane vinegar, garlic, ginger, lemongrass, sugar, anatto oil, and Knorr Chicken Cube. Mix this well and leave in the chiller to develop the flavours overnight., This Inasal recipe is not only easy to make but it is also flexible. You have the option of grilling this over hot coal or pan-frying it over stove top while basting it in its own sauce., Make your family’s hearts sing and smile when you cook this no fuss Chicken Inasal meal at the comfort of your own home.',
  },
  {
    
    name: 'Chicken Tinola ',
    Ingredients: '1 tbsp cooking oil, 1 pc onion, small -sized, chopped, 2 cloves garlic, chopped, 1 pc ginger, cut into strips, ½ kilo chicken, cut into 8 pcs, 4 cups water, 2 pcs Knorr chicken cubes, 1 pc chayote or 1 pc small - sized green papaya, sliced, 2 stalks moringa leaves',
    Instructions:'Get a pot and bring it up to medium heat before pouring in the oil. Drop in the onions, garlic and ginger and sauté slowly for about 2 minutes or until you can smell the lovely aroma., It’s time to drop in the chicken pieces and stir until it turns white or light brown in color., Pour in the water and add your Knorr Chicken Broth cubes. Bring this to a simmer until chicken is tender and cooked through., You can now add your sayote or green papaya and cook until tender., Dahon ng sili is added at the last stage to ensure leaves (and nutrients) don’t dry up. Give this a minute then it is done. Malunggay is also another healthy alternative because it is packed with vitamins and minerals which are good for nursing moms and kids as well., Enjoy this with patis and calamansi on the side. See the faces of your whole family light up as you bring this to the table.',
  },
  

  
];
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
