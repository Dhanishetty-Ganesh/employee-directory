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
    email: "sam@example.com",
    department: "HR",
    role: "Manager",
  },
];

function getStoredEmployees() {
  const stored = localStorage.getItem("employees");
  if (stored) {
    return JSON.parse(stored);
  } else {
    // Save mock data to localStorage on first load
    localStorage.setItem("employees", JSON.stringify(mockEmployees));
    return mockEmployees;
  }
}
