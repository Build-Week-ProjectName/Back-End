# Back-End

Find the best food truck in town and track their locations.

Food Truckr Documentation

\*\*\*See More on a documentation and examples at https://backend-foodtruckr2.herokuapp.com/docs/

\*\*\* Link the api URL https://backend-foodtruckr2.herokuapp.com/

AUTH ROUTES

Register

axios.post("/api/auth/register")

https://backend-foodtruckr2.herokuapp.com/api/auth/register

Login

axios.post("/api/auth/login")

https://backend-foodtruckr2.herokuapp.com/api/auth/login

API ROUTES

Users

Example: axios.get("/api/users")

    Get all users (GET /api/users)

    Get user by id (GET /api/users/:id)

    Update user by id (PUT /api/users/:id)

    Delete user by id (DELETE /api/users/:id)

Trucks

**_ Must be login with token_**

Example: axios.get("/api/trucks")

https://backend-foodtruckr2.herokuapp.com/api/trucks

    Get all trucks (GET /api/trucks)

    Get truck by id (GET /api/trucks/:id)

    Update truck by id (PUT /api/trucks/:id)

    Delete truck by id (DELETE /api/trucks/:id)

Menu

**_ Must be login with token_**

Example: axios.get("/api/menu")

https://backend-foodtruckr2.herokuapp.com/api/menu

    Get all menu (GET /api/menu)

    Get menu by id (GET /api/menu/:id)

    Update menu by id (PUT /api/menu/:id)

    Delete menu by id (DELETE /api/menu/:id)
