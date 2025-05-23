// 2. Create two students with the correct interface
var student1 = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 21,
    location: "Boston",
};
var student2 = {
    firstName: "Bob",
    lastName: "Williams",
    age: 23,
    location: "Seattle",
};
// 3. Create an array containing the two students
var studentsList = [student1, student2];
// 4. Render a table using Vanilla JavaScript (DOM API)
// Create the table element
var table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "60%";
table.style.margin = "20px auto";
// Create a header row with two columns: First Name and Location
var headerRow = document.createElement("tr");
var firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
firstNameHeader.style.border = "1px solid black";
firstNameHeader.style.padding = "8px";
var locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
locationHeader.style.border = "1px solid black";
locationHeader.style.padding = "8px";
// Append headers to the header row
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
// Append the header row to the table
table.appendChild(headerRow);
// For each student, append a row with their first name and location
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = "1px solid black";
    firstNameCell.style.padding = "8px";
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid black";
    locationCell.style.padding = "8px";
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
// Append the complete table to the document body
document.body.appendChild(table);
