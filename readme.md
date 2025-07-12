# Employee Directory App

A responsive and feature-rich employee management dashboard built using **HTML**, **CSS**, and **Vanilla JavaScript**. This application allows users to **view**, **add**, **edit**, **delete**, **search**, **sort**, and **filter** employee records. It includes **pagination**, **localStorage persistence**, and optional **Freemarker template integration** for backend simulation.

---

## 🚀 Features

- 🔍 **Search** employees by name or email
- 🔃 **Sort** by first name or department
- 🎯 **Filter** by name, department, or role using a modal
- ➕ **Add new** employees using a styled form
- ✏️ **Edit** existing employee details
- 🗑️ **Delete** employees with confirmation
- 📄 **Pagination** with selectable items per page (10, 25, 50, 100)
- 💾 **LocalStorage** support for real-time data persistence
- 📱 **Responsive** layout for desktop and mobile
- 🎨 Light-blue themed UI with card layout and animation
- 🧩 **Optional Freemarker templates** for backend rendering (Spring Boot friendly)

---

## 🗂️ Project Structure

project-root/
├── dashboard.html # Main dashboard page
├── add-edit-form.html # Form to add/edit employees
├── src/
│ └── main/
│ └── resources/
│ └── static/
│ ├── css/
│ │ └── style.css # All global styles
│ ├── js/
│ │ ├── app.js # Core JS logic for dashboard & form
│ │ └── data.js # Mock employee data
│ └── templates/
│ ├── dashboard.ftlh # Freemarker dashboard template
│ └── add-edit-form.ftlh # Freemarker form template

yaml
Copy
Edit

---

## 💡 How It Works

- The app uses a `mockEmployees` array from `data.js`.
- All user actions (add/edit/delete) update the `localStorage`, simulating real-time persistence.
- The dashboard reads data from `localStorage` if available.
- The logic for rendering, filtering, pagination, and DOM updates is handled via pure JavaScript.
- Optional `.ftlh` files allow backend rendering via Spring Boot + Freemarker for dynamic apps.

---

## 🧪 Running the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/employee-directory.git
   cd employee-directory
Open in Browser

Open dashboard.html directly in any browser.

Usage

Click + Add Employee to add a new employee.

Click Edit or Delete to modify existing entries.

Use the search, sort, filter, and pagination controls for interaction.

🧠 LocalStorage Support
When a user adds or edits an employee, the data is stored in localStorage.

The app always loads employee data from localStorage if it exists.

This approach simulates persistence without needing an actual database.

🌐 Freemarker Integration (Optional)
Files dashboard.ftlh and add-edit-form.ftlh mimic dynamic server-rendered HTML templates.

You can use Spring Boot with Freemarker to map these pages and serve them via controllers.

🛠️ Technologies Used
HTML5 & CSS3

Vanilla JavaScript (ES6+)

Flexbox & CSS Grid

Freemarker (optional)

localStorage for persistent state
