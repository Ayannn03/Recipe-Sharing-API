# Recipe-Sharing-API

### Install Node.js and Required Packages:

#### 1. Install Node.js and npm:
   - Download and install Node.js from [the official website](https://nodejs.org/).
   - npm (Node Package Manager) is included with Node.js.

#### 2. Create a New Node.js Project:
   - Open a terminal or command prompt.
   - Navigate to the directory where you want to create your project.

#### 3. Initialize a New Node.js Project:
   - Run the following command to initialize a new Node.js project:
     ```bash
     npm init -y
     ```
     This will create a `package.json` file with default values.

#### 4. Install Required Packages:
   - Install the necessary packages using the following command:
     ```bash
     npm install express body-parser joi
     ```
     - `express`: Web application framework for Node.js.
     - `body-parser`: Middleware to parse incoming request bodies.
     - `joi`: Object schema description language and validator.

### Set Up and Run Your Express.js Server:

#### 5. Create Your Express.js File:
   - Create a new file (e.g., `app.js` or any filename of your choice) and paste the provided Express.js code into it.

#### 6. Run Your Express.js Server:
   - In the terminal, run the following command to start your Express.js server:
     ```bash
     node app.js
     ```
   - The server will start and listen for requests on `https://localhost:3000` by default.

### Test Endpoints with Postman:

#### 7. Use Postman for CRUD Operations:
   - Open Postman and perform the following CRUD operations:
     - **GET All Recipes:** Send a GET request to `https://localhost:3000/api/recipes`.
     - **GET Single Recipe:** Send a GET request to `https://localhost:3000/api/recipes/{recipeName}` (replace `{recipeName}` with an actual recipe name).
     - **POST New Recipe:** Send a POST request to `https://localhost:3000/api/recipes`
     - {
           "name": "New Recipe",
           "ingredients": ["Ingredient 1", "Ingredient 2"],
           "instructions": ["Step 1", "Step 2"],
           "Tag": "Dinner"
       } with the recipe details in the request body.
     - **PUT Update Recipe:** Send a PUT request to `https://localhost:3000/api/recipes/{recipeName}` with the updated recipe details in the request body.
     - **DELETE Recipe:** Send a DELETE request to `https://localhost:3000/api/recipes/{recipeName}` to delete a recipe.

### Note:
   - Ensure that the necessary Node.js packages are installed by checking the `node_modules` directory in your project.
   - If you encounter any issues related to SSL certificates in Postman, you can temporarily disable SSL certificate verification in Postman settings.

With these steps, you should have a Node.js project set up with the required dependencies, and your Express.js server running. Adjust filenames and paths as needed based on your project structure.

members: Ian Reniel R. Rey
         Ramon Jacob Laugo

