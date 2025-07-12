// -------------------- State --------------------
let employees = getStoredEmployees();
let filteredEmployees = [...employees];
let currentPage = 1;
let itemsPerPage = 10;

// -------------------- DOM Elements --------------------
const employeeContainer = document.getElementById("employeeContainer");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const filterBtn = document.getElementById("filterBtn");
const filterModal = document.getElementById("filterModal");
const applyFilterBtn = document.getElementById("applyFilterBtn");
const clearFilterBtn = document.getElementById("clearFilterBtn");
const itemsPerPageSelect = document.getElementById("itemsPerPageSelect");
const paginationControls = document.getElementById("paginationControls");
const addEmployeeBtn = document.getElementById("addEmployeeBtn");
const closeFilterModal = document.getElementById("closeFilterModal");

// -------------------- Render Employees --------------------
function renderEmployees(data) {
  employeeContainer.textContent = "";

  if (data.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.textContent = "No employees found.";
    employeeContainer.appendChild(emptyMsg);
    return;
  }

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginated = data.slice(start, end);

  for (const emp of paginated) {
    const card = document.createElement("div");
    card.className = "employee-card";

    const name = document.createElement("h3");
    name.textContent = `${emp.firstName} ${emp.lastName}`;
    card.appendChild(name);

    const id = document.createElement("p");
    id.innerHTML = `<strong>ID:</strong> ${emp.id}`;
    card.appendChild(id);

    const email = document.createElement("p");
    email.innerHTML = `<strong>Email:</strong> ${emp.email}`;
    card.appendChild(email);

    const dept = document.createElement("p");
    dept.innerHTML = `<strong>Department:</strong> ${emp.department}`;
    card.appendChild(dept);

    const role = document.createElement("p");
    role.innerHTML = `<strong>Role:</strong> ${emp.role}`;
    card.appendChild(role);

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";
    editBtn.onclick = () => handleEdit(emp.id);
    card.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => handleDelete(emp.id);
    card.appendChild(deleteBtn);

    employeeContainer.appendChild(card);
  }

  renderPagination(data.length);
}

// -------------------- Pagination --------------------
function renderPagination(totalItems) {
  paginationControls.textContent = "";
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => {
      currentPage = i;
      renderEmployees(filteredEmployees);
    };
    paginationControls.appendChild(btn);
  }
}

// -------------------- Edit / Delete / Add --------------------
function handleDelete(id) {
  if (!confirm("Are you sure you want to delete this employee?")) return;
  employees = employees.filter(emp => emp.id !== id);
  filteredEmployees = [...employees];
  saveToLocalStorage(employees);
  renderEmployees(filteredEmployees);
}

function handleEdit(id) {
  window.location.href = `./add-edit-form.html?editId=${id}`;
}

function redirectToAddForm() {
  window.location.href = "./add-edit-form.html";
}

// -------------------- Search / Sort / Filter --------------------
function handleSearch(query) {
  const lower = query.toLowerCase();
  filteredEmployees = employees.filter(emp =>
    emp.firstName.toLowerCase().includes(lower) ||
    emp.lastName.toLowerCase().includes(lower) ||
    emp.email.toLowerCase().includes(lower)
  );
  currentPage = 1;
  renderEmployees(filteredEmployees);
}

function handleSort(key) {
  if (!key) return;
  filteredEmployees.sort((a, b) =>
    a[key].toLowerCase() > b[key].toLowerCase() ? 1 : -1
  );
  currentPage = 1;
  renderEmployees(filteredEmployees);
}

function handleFilter() {
  const fname = document.getElementById("filterFirstName").value.toLowerCase();
  const dept = document.getElementById("filterDepartment").value.toLowerCase();
  const role = document.getElementById("filterRole").value.toLowerCase();

  filteredEmployees = employees.filter(emp => {
    const f = emp.firstName.toLowerCase().includes(fname);
    const d = emp.department.toLowerCase().includes(dept);
    const r = emp.role.toLowerCase().includes(role);
    return f && d && r;
  });

  currentPage = 1;
  renderEmployees(filteredEmployees);
  filterModal.classList.add("hidden");
}

// -------------------- Event Bindings --------------------
if (employeeContainer) {
  renderEmployees(filteredEmployees);

  searchInput?.addEventListener("input", e =>
    handleSearch(e.target.value.trim())
  );

  sortSelect?.addEventListener("change", e =>
    handleSort(e.target.value)
  );

  filterBtn?.addEventListener("click", () =>
    filterModal.classList.remove("hidden")
  );

  closeFilterModal?.addEventListener("click", () =>
    filterModal.classList.add("hidden")
  );

  applyFilterBtn?.addEventListener("click", handleFilter);

  clearFilterBtn?.addEventListener("click", () => {
    document.getElementById("filterFirstName").value = "";
    document.getElementById("filterDepartment").value = "";
    document.getElementById("filterRole").value = "";
    filteredEmployees = [...employees];
    renderEmployees(filteredEmployees);
    filterModal.classList.add("hidden");
  });

  itemsPerPageSelect?.addEventListener("change", e => {
    itemsPerPage = parseInt(e.target.value);
    currentPage = 1;
    renderEmployees(filteredEmployees);
  });

  addEmployeeBtn?.addEventListener("click", redirectToAddForm);

  window.addEventListener("click", e => {
    if (e.target === filterModal) {
      filterModal.classList.add("hidden");
    }
  });
}

// -------------------- Add/Edit Form Page --------------------
const employeeForm = document.getElementById("employeeForm");
if (employeeForm) {
  const urlParams = new URLSearchParams(window.location.search);
  const editId = parseInt(urlParams.get("editId"));

  const employeeIdField = document.getElementById("employeeId");
  const firstNameField = document.getElementById("firstName");
  const lastNameField = document.getElementById("lastName");
  const emailField = document.getElementById("email");
  const departmentField = document.getElementById("department");
  const roleField = document.getElementById("role");
  const formTitle = document.getElementById("formTitle");

  if (editId) {
    const emp = employees.find(e => e.id === editId);
    if (emp) {
      employeeIdField.value = emp.id;
      firstNameField.value = emp.firstName;
      lastNameField.value = emp.lastName;
      emailField.value = emp.email;
      departmentField.value = emp.department;
      roleField.value = emp.role;
      formTitle.textContent = "Edit Employee";
    }
  }

  employeeForm.addEventListener("submit", e => {
    e.preventDefault();

    const id = employeeIdField.value
      ? parseInt(employeeIdField.value)
      : Date.now();

    const newEmp = {
      id,
      firstName: firstNameField.value.trim(),
      lastName: lastNameField.value.trim(),
      email: emailField.value.trim(),
      department: departmentField.value,
      role: roleField.value,
    };

    if (!validateForm(newEmp)) return;

    const index = employees.findIndex(e => e.id === id);
    if (index !== -1) {
      employees[index] = newEmp;
    } else {
      employees.push(newEmp);
    }

    saveToLocalStorage(employees);

    alert("Saved successfully!");
    window.location.href = "./index.html";
  });

  document.getElementById("cancelBtn").addEventListener("click", () => {
    window.location.href = "./index.html";
  });
}

// -------------------- Validation --------------------
function validateForm(emp) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emp.firstName || !emp.lastName || !emp.email || !emp.department || !emp.role) {
    alert("All fields are required.");
    return false;
  }
  if (!emailRegex.test(emp.email)) {
    alert("Invalid email format.");
    return false;
  }
  return true;
}

// -------------------- Local Storage Utility --------------------
function saveToLocalStorage(data) {
  localStorage.setItem("employees", JSON.stringify(data));
}

function getStoredEmployees() {
  const stored = localStorage.getItem("employees");
  return stored ? JSON.parse(stored) : [];
}
