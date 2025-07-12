<!-- src/main/resources/templates/form.ftlh -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Add/Edit Employee</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/static/css/style.css" />
</head>
<body>
  <div class="form-container">
    <h2 id="formTitle">Add Employee</h2>
    <form id="employeeForm">
      <input type="hidden" id="employeeId" />
      <label>First Name: <input type="text" id="firstName" required /></label>
      <label>Last Name: <input type="text" id="lastName" required /></label>
      <label>Email: <input type="email" id="email" required /></label>
      <label>Department: <input type="text" id="department" required /></label>
      <label>Role: <input type="text" id="role" required /></label>

      <div class="form-buttons">
        <button type="submit" id="saveBtn">Save</button>
        <button type="button" id="cancelBtn">Cancel</button>
      </div>
    </form>
  </div>

  <script src="/static/js/data.js"></script>
  <script src="/static/js/app.js"></script>
</body>
</html>
