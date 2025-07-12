// data.js
const mockEmployees = [
  {
    id: 1,
    firstName: "Ganesh",
    lastName: "Kumar",
    email: "ganesh@example.com",
    department: "IT",
    role: "Developer",
  },
  {
    id: 2,
    firstName: "Sneha",
    lastName: "Reddy",
    email: "sneha@example.com",
    department: "HR",
    role: "Manager",
  },
  {
    id: 3,
    firstName: "Sam",
    lastName: "Richard",
    email: "sama@example.com",
    department: "HR",
    role: "Manager",
  },
];

function getStoredEmployees() {
  const fromStorage = localStorage.getItem("employeeData");
  return fromStorage ? JSON.parse(fromStorage) : mockEmployees;
}

function saveToLocalStorage(data) {
  localStorage.setItem("employeeData", JSON.stringify(data));
}
