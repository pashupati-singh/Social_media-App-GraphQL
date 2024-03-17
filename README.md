# Social_media-App-GraphQL

Welcome to the server-side codebase of the Social Media App. This application allows users to register, login, write quotes, and perform other social interactions. It is built using Node.js, GraphQL, Apollo Server, MongoDB, Mongoose, JWT, and other technologies.

# Deploy Link

https://social-media-app-graphql.onrender.com/

# Getting Started

To get started with the project, follow these steps:

1. Clone the Repository:

git clone https://github.com/pashupati-singh/Social_media-App-GraphQL.git
cd Social_media-App-GraphQL

2. Install Dependencies: npm install

3. Set Up Environment Variables:
Create a .env file in the root directory and define the following variables:

MONGO_URI=""
JWT_SECRET="SOCIALMEDIA"

4. Run server: npm run server
5. Deployment on Render:

Create an account on Render (https://render.com/)

Set up a new web service for your server-side application

Configure environment variables and other settings as needed

Deploy your application to Render using Git integration or other deployment methods

# Technologies Used

Node.js: JavaScript runtime environment

GraphQL: Query language for APIs

Apollo Server: GraphQL server library

Apollo Server Core: Core functionality for Apollo Server

MongoDB: NoSQL database for storing user data

Mongoose: MongoDB object modeling for Node.js

JWT (JSON Web Tokens): Token-based authentication mechanism

Dotenv: Environment variable management

Nodemon: Development utility for auto-restarting the server

Bcrypt: Password hashing library

# All Querys and Mutations

----------------------
query getUserById($userid:ID!){
  user(_id:$userid){
    _id
    firstName
    lastName
    email
  }
}
-----------------------------
query getAllQuotes{
  quotes{
    name
    by  
  }
}

-----------------
query getQuoteByUser($quoteby:ID!){
  iquote(by:$quoteby){
    name
    by
  }
}

------------
mutation createUser($userNew:UserInput!){
  user:signupUser(userNew:$userNew){ 
    _id
    email
    firstName
    lastName
  }
}

CLIENT SIDE DATA
{
  "userNew": {
    "firstName": "chiku",
    "lastName": "singh",
    "email": "C@gmail.com",
    "password": "123456"
  }
}

--------
mutation SigninUser($userSignin:UserSigninInput!){
  user:signinUser(userSignin:$userSignin){ 
    token
  }
}

CLIENT SIDE DATA

{
  "userSignin": {
    "email": "xyz@gmail.com",
    "password": "XXXXX"
  }
}
------


mutation createQuote{
  quote:createQuote(name:"i am another nice quote")
}

-------------

# important 
{
"authorization" : "token"
}
