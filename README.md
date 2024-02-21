# Recipe-Sharing-API

1. **GET All Recipes:**
   - Endpoint: `/api/recipes`
   - Method: GET
   - Description: Get a list of all recipes.
   - Example: `https://localhost:3000/api/recipes`

2. **GET Specific Recipe by Name:**
   - Endpoint: `/api/recipes/:name`
   - Method: GET
   - Description: Get details of a specific recipe by providing its name as a parameter.
   - Example: `https://localhost:3000/api/recipes/Pork Adobo`

3. **POST (Create) a New Recipe:**
   - Endpoint: `/api/recipes`
   - Method: POST
   - Description: Create a new recipe by sending a JSON payload with the recipe details.
   - Example:
     ```bash
     curl -X POST -H "Content-Type: application/json" -d '{"name": "New Recipe", "ingredients": ["Ingredient1", "Ingredient2"], "instructions": ["Step 1", "Step 2"], "tag": "Dinner"}' https://localhost:3000/api/recipes
     ```

4. **PUT (Update) a Recipe:**
   - Endpoint: `/api/recipes/:name`
   - Method: PUT
   - Description: Update an existing recipe by providing its name as a parameter and sending a JSON payload with the updated details.
   - Example:
     ```bash
     curl -X PUT -H "Content-Type: application/json" -d '{"name": "Pork Adobo", "ingredients": ["Updated Ingredient1", "Updated Ingredient2"], "instructions": ["Updated Step 1", "Updated Step 2"], "tag": "Updated Tag"}' https://localhost:3000/api/recipes/Pork Adobo
     ```

5. **DELETE a Recipe:**
   - Endpoint: `/api/recipes/:name`
   - Method: DELETE
   - Description: Delete a recipe by providing its name as a parameter.
   - Example: `curl -X DELETE https://localhost:3000/api/recipes/Pork Adobo`

Make sure to replace `https://localhost:3000` with the actual URL or IP where your server is running. You can use tools like `curl` or Postman for testing these API endpoints. Additionally, the application uses Express.js and Joi for validation. Ensure you have the required dependencies installed:

```bash
npm install express express-validator joi
```

You can then run your application using:

```bash
node your-app-file.js
```

Remember to customize this example according to your specific needs, and feel free to ask if you have any questions or need further clarification.

members: Ian Reniel R. Rey
         Ramon Jacob Laugo

