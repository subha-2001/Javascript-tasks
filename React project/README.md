#Project overview


Contact Form with Email Sending

We'll create a full-stack application where the user can fill out a contact form, and upon submission, the information will be sent to a 
specified email address. This project involves both frontend (React) and backend (Node.js with Express and Nodemailer) development.

### Frontend: React

1. **Create React App**
   - We use `npx create-react-app contact` to quickly set up a new React application with all the necessary configurations and dependencies.

2. **Class Component**
   - React components can be class-based or functional. In this project, we use a class component to manage the form's state and handle form submission.
   - **Constructor**: Initializes the component's state.
   - **Super(props)**: Calls the constructor of the parent class (`Component`), which is necessary when defining the constructor in a subclass.

3. **Form Handling**
   - The form will collect the user's name, phone number, email, and message.
   - **State Management**: The component's state stores form data.
   - **Event Handlers**: Methods like `handleFullName`, `handlePhoneNumber`, `handleEmail`, and `handleMessage` update the state with user inputs.
   - **Form Submission**: The `handleSubmit` method handles form submission, sending data to the backend via an HTTP POST request using `axios`.
     ![Screenshot (79)](https://github.com/user-attachments/assets/4ddf5f8e-865c-421d-aa49-3a9336f14c1b)
![Screenshot_30-7-2024_164536_localhost](https://github.com/user-attachments/assets/ca8a37ac-a03d-447c-a1b5-cb62d9d3c5ab)


4. **Popup Message**
   - A popup message informs the user whether the email was successfully sent or if there was an error.
  
    
   ![Screenshot (86)](https://github.com/user-attachments/assets/af5546ec-72fc-40fc-842d-b451633288cc)
   ![Screenshot (87)](https://github.com/user-attachments/assets/3fe45cc5-eb4f-4683-a596-953a980bd932)



### Backend: Node.js with Express and Nodemailer

1. **Express**
   - A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
   - **app.use(bodyParser.json())**: Parses incoming request bodies in a middleware before handlers, available under `req.body`.
   - **app.use(cors())**: Enables Cross-Origin Resource Sharing (CORS), which allows the frontend and backend to communicate 
when they are hosted on different domains.

2. **Nodemailer**
   - A module for Node.js applications to allow easy email sending.
   - **Transporter**: Configures the email service and authentication details.
   - **Mail Options**: Defines the email's sender, recipient, subject, and content.
<img width="719" alt="Screenshot (84)" src="https://github.com/user-attachments/assets/bfd78aeb-7927-4ff3-b6a9-e6a98f07b7d2">



3. **Environment Variables**
   - Storing sensitive information (like email credentials) in environment variables (`.env` file) instead of hardcoding them in the source code. 
This enhances security and keeps credentials out of version control.

### Steps Summary

1. **Frontend Setup**
   - Set up the React app and create a form component.
   - Manage form state and handle form submission.
   - Display a popup message for feedback.
   
2. **Backend Setup**
   - Set up a Node.js server with Express.
   - Use body-parser to parse incoming request bodies.
   - Enable CORS for cross-origin requests.
   - Set up Nodemailer for sending emails.
   - Create API endpoints for handling form submissions and sending emails.
   - 

### Useful Middleware and Concepts

- **body-parser**: Middleware for parsing incoming request bodies before your handlers, available under the `req.body` property. 
Essential for processing POST requests.
- **cors**: Middleware that allows restricted resources on a web page to be requested from another domain outside the domain 
from which the resource originated. Important for enabling communication between the frontend and backend if they are hosted on different domains.
- **Nodemailer**: Helps to easily send emails from Node.js applications, essential for email functionality in our project.

By following these steps, you'll have a fully functional contact form that sends the collected information to a specified email address, 
providing both the user and the site owner with an easy way to manage contact requests.
