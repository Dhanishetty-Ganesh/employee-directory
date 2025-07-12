Employee Directory App
The Employee Directory App is a responsive and functional employee management dashboard built using HTML, CSS, and Vanilla JavaScript. It allows users to view, add, edit, delete, search, sort, and filter employee records, with support for pagination and a professional UI.

Features
Role-based interface using local mock data

Search employees by name or email

Sort by first name or department

Filter by name, department, or role using a modal

Add new employees using a clean form

Edit existing employee details

Delete employees with confirmation

Pagination with selectable items per page (10, 25, 50, 100)

Responsive layout for desktop and mobile

Light-blue themed UI with card layout and form styling

Footer section with copyright

Project Structure
php
Copy
Edit
project-root/
├── dashboard.html               # Main dashboard page (uses localStorage + JS)
├── add-edit-form.html          # Add/Edit form page
├── src/
│   └── main/
│       └── resources/
│           └── static/
│               ├── css/
│               │   └── style.css           # All styles
│               ├── js/
│               │   ├── app.js              # Main JS logic for dashboard & form
│               │   └── data.js             # Mock data for employees
│               └── templates/
│                   ├── dashboard.ftlh      # Freemarker dashboard template
│                   └── add-edit-form.ftlh  # Freemarker form template
How It Works
The app uses mock data (mockEmployees array) from data.js.

When employees are added or updated, the data is also saved to localStorage for persistence across reloads.

The Freemarker templates (.ftlh) simulate rendering via a backend system like Spring Boot.

All operations (search, filter, pagination, etc.) are done client-side using JavaScript.

Running the Project
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/employee-directory.git
cd employee-directory
Open the dashboard.html file in your browser.

Click the "+ Add Employee" button to go to the form.

Submit a new employee or edit existing ones.

Use the filters, sort dropdown, and search to interact with the list.

LocalStorage Support
On every form submission (add or edit), data is stored in localStorage.

When the dashboard loads, it first checks localStorage and uses that if available.

This simulates real-time data persistence without needing a backend.

Freemarker Integration 
Files like dashboard.ftlh and add-edit-form.ftlh are available to simulate server-rendered pages using Spring Boot + Freemarker.

You can render these with a minimal Spring Boot backend by mapping the templates using a ModelAndView.

Technologies Used
HTML5 and CSS3

Vanilla JavaScript (ES6+)

Flexbox & CSS Grid

Freemarker template engine (optional)

LocalStorage for persistence

Future Enhancements
Add backend integration (Node.js or Spring Boot)

Add employee photo upload

Export employee data to Excel/PDF

Authentication for role-based access (Admin, HR, etc.)

Author
Ganesh
Developer and UI/Frontend Engineer

