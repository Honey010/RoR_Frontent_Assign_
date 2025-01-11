# RoR_Frontent_Assign_HONEY_CHAUHAN__
Here’s a *README.md* file for your project. It includes a detailed overview, setup instructions, API details, and usage guidelines.

---

### *README.md*

# *Transaction Management System*

A web application for managing product transactions. This project includes APIs for database initialization, transaction statistics, and visualization (bar chart and pie chart) along with a responsive frontend for data display and interaction.

---

## *Features*
- Fetch and initialize database with third-party JSON data.
- List transactions with search and pagination.
- Display statistics for selected months, including:
  - Total sales amount.
  - Number of sold and unsold items.
- Visualize transaction data using:
  - Bar charts (price range vs. item count).
  - Pie charts (category vs. item count).
- Responsive UI for data exploration and interaction.

---

## *Tech Stack*
- *Backend*: Node.js, Express.js, MongoDB
- *Frontend*: React.js, Chart.js, Axios
- *Third-Party API*: https://s3.amazonaws.com/roxiler.com/product_transaction.json

---

## *Directory Structure*


Transaction-Management-System/
├── backend/
│   ├── models/
│   │   └── Transaction.js       # MongoDB schema for transactions
│   ├── routes/
│   │   ├── transactions.js      # Routes for transaction APIs
│   ├── seed.js                  # Script to seed data from third-party API
│   ├── server.js                # Main Express server file
│   ├── package.json             # Backend dependencies and scripts
├── frontend/
│   ├── public/
│   │   └── index.html           # Main HTML file
│   ├── src/
│   │   ├── components/          # React components
│   │   ├── App.js               # Main React app file
│   │   ├── App.css              # Global CSS styles
│   │   ├── index.js             # ReactDOM entry point
│   │   ├── api.js               # Axios API integration
│   ├── package.json             # Frontend dependencies and scripts
├── README.md                    # Project documentation


---

## *Backend Setup*

1. Navigate to the backend directory:
   bash
   cd backend
   

2. Install dependencies:
   bash
   npm install
   

3. Create a .env file for environment variables:
   plaintext
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/transactionDB
   

4. Seed the database with the third-party JSON data:
   bash
   npm run seed
   

5. Start the backend server:
   bash
   npm run dev
   

---

## *Frontend Setup*

1. Navigate to the frontend directory:
   bash
   cd frontend
   

2. Install dependencies:
   bash
   npm install
   

3. Start the frontend development server:
   bash
   npm start
   

---

## *APIs*

### 1. *Initialize Database*
- *Endpoint*: GET /api/seed
- *Description*: Fetches data from a third-party API and seeds the database.

### 2. *List Transactions*
- *Endpoint*: GET /api/transactions
- *Query Parameters*:
  - month (required): Month name (e.g., March).
  - search (optional): Search term for title, description, or price.
  - page (optional): Page number (default: 1).
  - perPage (optional): Records per page (default: 10).

### 3. *Transaction Statistics*
- *Endpoint*: GET /api/statistics
- *Query Parameters*: month (required).

### 4. *Bar Chart Data*
- *Endpoint*: GET /api/bar-chart
- *Query Parameters*: month (required).

### 5. *Pie Chart Data*
- *Endpoint*: GET /api/pie-chart
- *Query Parameters*: month (required).

### 6. *Combined Data*
- *Endpoint*: GET /api/combined
- *Query Parameters*: month (required).

---

## *Usage*

1. Open the app in a browser at [http://localhost:3000](http://localhost:3000).
2. Use the dropdown menu to select a month (default: March).
3. Interact with:
   - *Transactions Table*: Search, paginate, and view transaction data.
   - *Statistics Section*: View total sales, sold items, and unsold items.
   - *Bar Chart*: Visualize item counts in price ranges.
   - *Pie Chart*: Visualize item distribution across categories.

---

## *Deployment*

1. Push the code to a GitHub repository.
2. Deploy the backend using *Heroku, **AWS, or **Vercel*.
3. Deploy the frontend using *Netlify, **Vercel, or **GitHub Pages*.
4. Update API URLs in frontend/src/api.js to point to the deployed backend.

---

## *Contributing*

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you’d like to change.

--- 

This README provides all the necessary details for developers and users to understand and work with the project effectively.
