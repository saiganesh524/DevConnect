# DevConnect - A Developer Networking Platform (MERN Stack)
#Backend Development (Node.js, Express.js, MongoDB, Mongoose):
Developed 11 RESTful APIs, including:

#User Authentication:
Implemented user signup and login functionalities using bcrypt to securely hash passwords.
On login, verified credentials by comparing the hashed password stored in the database with user-entered credentials.
Generated and managed JWT tokens for user authentication, ensuring secure access to protected routes.
#Session Management:
Managed login and logout sessions by sending JWT tokens as HTTP-only cookies for secure frontend-backend communication. Cleared tokens and state upon logout for security.
#Profile Management:
Enabled users to view and edit their profiles, with restrictions on editing sensitive fields such as email and password.
Implemented a change password feature that verifies the current password and ensures the new passwords match.
#Connection Requests:
Implemented a connection request system similar to Tinder, allowing users to send, accept, reject, or ignore connection requests.
Developed APIs to handle received requests, sent requests, and current connections.
#User Feed:
Created a dynamic feed displaying users who are neither connected nor have sent a request, enabling discovery of potential new connections.
#Frontend Development (React.js, Redux, Tailwind CSS, DaisyUI):

Designed and implemented a responsive user interface with light and dark themes, ensuring a seamless user experience across devices.
Utilized Redux for efficient state management, particularly in handling user sessions, authentication, and profile data.
Integrated JWT validation for all API calls to securely handle user authentication on the frontend.
Security and Best Practices:

Prioritized security by validating JWT tokens on every API request to ensure only authenticated users can access protected resources.
Utilized HTTP-only cookies to prevent unauthorized access and ensure token security during frontend-backend communication.
Cleared cookies and Redux store on user logout to enhance session security.
