<!-- src/main/resources/templates/dashboard.ftlh -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Employee Directory</title>
  <link rel="stylesheet" href="/static/css/style.css" />
</head>
<body>
  <header>
    <h1>Employee Directory</h1>
    <input type="text" id="searchInput" placeholder="Search by name or email" />
    <button id="filterBtn">Filter</button>
    <select id="sortSelect">
      <option value="">Sort By</option>
      <option value="firstName">First Name</option>
      <option value="department">Department</option>
    </select>
  </header>

  <div id="filterSidebar" class="hidden">
    <h3>Filter</h3>
    <label>First Name: <input type="text" id="filterFirstName" /></label>
    <label>Department: <input type="text" id="filterDepartment" /></label>
    <label>Role: <input type="text" id="filterRole" /></label>
    <button id="applyFilterBtn">Apply Filter</button>
  </div>

  <main id="employeeContainer">
    <#list employees as emp>
      <div class="employee-card" data-id="${emp.id}">
        <h3>${emp.firstName} ${emp.lastName}</h3>
        <p>ID: ${emp.id}</p>
        <p>Email: ${emp.email}</p>
        <p>Department: ${emp.department}</p>
        <p>Role: ${emp.role}</p>
        <button class="editBtn" data-id="${emp.id}">Edit</button>
        <button class="deleteBtn" data-id="${emp.id}">Delete</button>
      </div>
    </#list>
  </main>

  <div class="pagination-controls">
    <label>Items per page:
      <select id="itemsPerPage">
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>
    </label>
    <div id="pagination"></div>
  </div>

  <script src="/static/js/data.js"></script>
  <script src="/static/js/app.js"></script>
</body>
</html>
