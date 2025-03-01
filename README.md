cat <<EOF > README.md
# MERN Stack Authentication App

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

---

## Overview

This is a full-stack authentication application built using the **MERN Stack** (MongoDB, Express.js, React, Node.js). The app allows users to register, log in, and access a dashboard after successful authentication. It uses JSON Web Tokens (JWT) for secure authentication and bcrypt for password hashing.

---

## Features

- **User Registration**: Users can create an account by providing their name, email, and password.
- **User Login**: Registered users can log in using their email and password.
- **Dashboard Access**: Authenticated users are redirected to a personalized dashboard.
- **Password Hashing**: Passwords are securely hashed using bcrypt.
- **JWT Authentication**: Secure token-based authentication for protected routes.
- **Responsive Design**: Clean and user-friendly interface.

---

## Technologies Used

- **Frontend**:
  - React.js
  - React Router DOM
  - Axios for API calls
  - CSS for styling

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose ODM)
  - bcryptjs for password hashing
  - jsonwebtoken (JWT) for authentication
  - dotenv for environment variables

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher): [Download Node.js](https://nodejs.org/)
- MongoDB: You can use a local MongoDB instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Git: [Download Git](https://git-scm.com/)

### Installation

1. **Clone the Repository**:
   \`\`\`bash
   git clone https://github.com/eyob231/mern-auth.git
   cd mern-auth
   \`\`\`

2. **Install Backend Dependencies**:
   \`\`\`bash
   cd backend
   npm install
   \`\`\`

3. **Install Frontend Dependencies**:
   \`\`\`bash
   cd ../client
   npm install
   \`\`\`

4. **Set Environment Variables**:
   - Create a .env file in the \`backend\` directory and add the following variables:
     \`\`\`
     PORT=5000
     MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
     JWT_SECRET=mysecretkey
     \`\`\`

5. **Start the Application**:
   - Start the backend server:
     \`\`\`bash
     cd ../backend
     npm start
     \`\`\`
   - Start the frontend development server:
     \`\`\`bash
     cd ../client
     npm start
     \`\`\`

   The app should now be running at [http://localhost:3000](http://localhost:3000).

---

## Usage

1. **Register**:
   - Go to the signup page (\`/signup\`) and fill out the form to create a new account.

2. **Login**:
   - Go to the login page (\`/login\`) and enter your credentials to log in.

3. **Dashboard**:
   - After successful login, you'll be redirected to the dashboard (\`/dashboard\`), where you can see your profile information.

4. **Logout**:
   - Use the logout button on the dashboard to end your session.

---

## Contributing

 Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   \`\`\`bash
   git checkout -b feature-name
   \`\`\`
3. Commit your changes:
   \`\`\`bash
   git commit -m "Add some feature"
   \`\`\`
4. Push to your fork and submit a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

If you have any questions or suggestions, feel free to reach out:

- GitHub: [@your-username](https://github.com/eyob231)
- Email: your-email@example.com

---

Thank you for checking out the MERN Stack Authentication App! 😊
EOF
