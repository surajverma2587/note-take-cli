const moment = require("moment");
const fs = require("fs");

const validateNumber = (input) => {
  const amountNumber = Number(input);
  if (isNaN(amountNumber) || amountNumber <= 0) {
    return "Amount should be a positive number greater than 0";
  }
  return true;
};

const validateInput = (input) => {
  if (!input) {
    return "This field cannot be empty!!";
  }

  return true;
};

const categoriseNotes = (notes) =>
  notes.reduce(
    (acc, each) => {
      if (each.getNoteType() === "BILL") acc.bills = [...acc.bills, each];

      if (each.getNoteType() === "TODO") acc.todos = [...acc.todos, each];

      if (each.getNoteType() === "APPOINTMENT")
        acc.appointments = [...acc.appointments, each];

      return acc;
    },
    { bills: [], appointments: [], todos: [] }
  );

const generateCards = (cards, label) => {
  return `<div>
  <h2 class="text-center">${label}</h2>
  <hr />
  <div class="d-flex flex-row flex-wrap justify-content-around">
    ${cards.map((card) => card.generateCard()).join("")}
  </div>
</div>`;
};

const generateHtml = ({ bills, appointments, todos }) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./styles.css" />
      <title>My Notes</title>
    </head>
    <body>
      <header>
        <div class="jumbotron text-center">
          <h1 class="display-4">My Notes</h1>
        </div>
      </header>
  
      <main>
        ${bills.length ? generateCards(bills, "Bills") : ""}
        ${todos.length ? generateCards(todos, "Todos") : ""}
        ${
          appointments.length ? generateCards(appointments, "Appointments") : ""
        }
      </main>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `;
};

const formatDate = (date) => {
  return moment(date).format("MM DD YYYY");
};

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  validateNumber,
  validateInput,
  categoriseNotes,
  formatDate,
  generateHtml,
  writeToFile,
};
