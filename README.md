# College Grahasthi

College Grahasthi is a web application that helps students find the perfect room to rent. It provides a platform for students to search for rooms based on their preferences and requirements. The application also allows property owners to list their available rooms and connect with potential tenants.

## Features

- **Search and Filter**: Students can search for rooms based on location, amenities, and price range. They can apply various filters to narrow down their search results.

- **Room Details**: Detailed information is provided for each room listing, including images, amenities, location, and contact information of the property owner.

- **User Registration and Authentication**: Students can create an account, log in, and save their favorite listings. Property owners can create an account and manage their room listings.

- **Rating and Reviews**: Users can leave ratings and reviews for the rooms they have rented, providing valuable feedback to other users.

- **Responsive Design**: The application is fully responsive, ensuring a seamless experience across different devices and screen sizes.

## Technologies Used

- **Frontend**: React.js, HTML, CSS, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Database**: MongoDB
- **Deployment**: Heroku (backend), Netlify (frontend)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/college-grahasthi.git
   ```

2. Install the dependencies for the frontend:

   ```bash
   cd college-grahasthi/frontend
   npm install
   ```

3. Install the dependencies for the backend:

   ```bash
   cd ../backend
   npm install
   ```

4. Set up the environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add the following variables to the `.env` file and provide appropriate values:
     ```
     PORT=3001
     MONGODB_URI=<your-mongodb-connection-string>
     JWT_SECRET=<your-jwt-secret-key>
     ```

5. Start the backend server:

   ```bash
   npm start
   ```

6. Start the frontend development server:

   ```bash
   cd ../frontend
   npm start
   ```

7. Access the application in your browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.
