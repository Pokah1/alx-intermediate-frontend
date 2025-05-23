// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students with the correct interface
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "Boston",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Williams",
  age: 23,
  location: "Seattle",
};

// 3. Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// 4. Render a table using Vanilla JavaScript (DOM API)

// Create the table element
const table: HTMLTableElement = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "60%";
table.style.margin = "20px auto";

// Create a header row with two columns: First Name and Location
const headerRow: HTMLTableRowElement = document.createElement("tr");

const firstNameHeader: HTMLTableCellElement = document.createElement("th");
firstNameHeader.textContent = "First Name";
firstNameHeader.style.border = "1px solid black";
firstNameHeader.style.padding = "8px";

const locationHeader: HTMLTableCellElement = document.createElement("th");
locationHeader.textContent = "Location";
locationHeader.style.border = "1px solid black";
locationHeader.style.padding = "8px";

// Append headers to the header row
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);

// Append the header row to the table
table.appendChild(headerRow);

// For each student, append a row with their first name and location
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";
  firstNameCell.style.padding = "8px";

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "8px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append the complete table to the document body
document.body.appendChild(table);