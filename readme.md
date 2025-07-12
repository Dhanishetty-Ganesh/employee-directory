# 📘 Employee Directory App

A responsive and fully functional **Employee Management Dashboard** built using **HTML**, **CSS**, and **Vanilla JavaScript**. The app allows users to **view**, **add**, **edit**, **delete**, **search**, **sort**, and **filter** employee records. It supports **pagination**, **localStorage-based data persistence**, and comes with optional **Freemarker templates** for server-side rendering simulation.

---

## 🚀 Features

- 🔍 Search employees by **name** or **email**
- 🔃 Sort employees by **first name** or **department**
- 🎯 Filter by **first name**, **department**, or **role** using a modal popup
- ➕ Add new employees via a **dedicated form**
- ✏️ Edit existing employee details
- 🗑️ Delete employees with confirmation
- 📄 Pagination with selectable items per page (**10, 25, 50, 100**)
- 💾 LocalStorage-based data saving
- 📱 Responsive layout for desktop & mobile screens
- 🎨 Clean, light-blue themed UI using **Flexbox** and **CSS Grid**
- 📌 Footer section with copyright
- 🧩 Freemarker template support for backend simulation

---

## 🗂️ Project Structure

employee-directory/
├── dashboard.html # Main dashboard
├── add-edit-form.html # Add/Edit form
├── src/
│ └── main/
│ └── resources/
│ └── static/
│ ├── css/
│ │ └── style.css # App styling
│ ├── js/
│ │ ├── app.js # Main JS logic
│ │ └── data.js # Initial mock employee data
│ └── templates/
│ ├── dashboard.ftlh # Freemarker dashboard template
│ └── add-edit-form.ftlh # Freemarker form template

---

## 💡 How It Works

- The app uses an array called `mockEmployees` defined in `data.js`.
- On page load, data is loaded from `localStorage` (if available).
- When a new employee is added or edited, the data is stored in `localStorage`.
- All filtering, sorting, searching, and pagination is done **client-side using JavaScript**.
- If using a backend, you can render `.ftlh` templates via **Spring Boot + Freemarker**.

---

## 💾 LocalStorage Integration

- When users **submit** the form (Add/Edit), employee data is stored in `localStorage`.
- On page load (`dashboard.html`), the app checks `localStorage` first.
- This gives the illusion of real-time persistence **without a backend**.

---

## 🧪 How to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/employee-directory.git
   cd employee-directory
Open in browser

Open dashboard.html in any modern browser.

Use the app

Click + Add Employee to add a new employee.

Use the form to input details.

Click Edit or Delete on any employee card.

Use the search bar, sort dropdown, and filter modal to navigate the list.

🧰 Technologies Used
✅ HTML5 & CSS3

✅ JavaScript (ES6+)

✅ Flexbox & CSS Grid

✅ localStorage for persistent state

✅ Freemarker (.ftlh) templates 
