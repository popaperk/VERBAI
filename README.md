# VERBAI
Verbai is an application, still in beta and developed for a school internship project, its purpose would be to help the user create verbals automatically."
PASSWORD TO ACESS VIA LOGIN PAGE 
username admin 
password 123

Description
The VERBAI Application allows users to create and manage police reports efficiently. It provides a user-friendly interface where officers can input details of incidents, generate reports, view saved reports, and manage their session securely with login/logout functionality.

Features
Generate Report Page: Fill out a form with incident details such as name, surname, date of birth, address, type of infraction, date, time, and additional notes. Upon submission, a report is generated.

View Reports Page: Access a list of all generated reports, view their details, and download them as text files for record keeping.

Login and Logout: Secure login functionality with credentials (admin / 123). Logout option available to end the session securely.

Pages
1. index.html (Generate Report Page)
Description: This page contains a form where users can input details of an incident to generate a police report.

Form Inputs:

Name
Surname
Date of Birth
Address
Type of Infraction
Date of Infraction
Time of Infraction
Additional Notes
Buttons:

Generate Report: Submits the form to generate a report based on the entered details.
Logout: Logs the user out and redirects to the login page (login.html).
2. verbali.html (View Reports Page)
Description: Displays a list of all generated police reports.

Functionality:

Each report entry includes details like name, surname, infraction type, date, and time.
Download Button: Allows downloading of each report as a text file.
Delete Button: Allows deleting a report from the list.
3. login.html (Login Page)
Description: Provides a login form for authorized access to the application.

Credentials:

Username: admin
Password: 123
Functionality:

Successful login redirects to index.html.
Displays error message for invalid credentials.
How to Use
Login:

Access login.html.
Enter the username (admin) and password (123).
Click "Login" to access the application.
Generate Report:

After logging in, navigate to index.html.
Fill out the incident details in the form.
Click "Generate Report" to create a new police report.
View Reports:

Navigate to verbali.html to see all generated reports.
Download or delete reports using the respective buttons.
Logout:

Click the "Logout" button on any page to securely end the session.
You will be redirected to the login page (login.html).
Technologies Used
Frontend: HTML, CSS, JavaScript
Storage: Local Storage for session management and data persistence
