const { formatDate } = require("../utils");
const Note = require("./Note");

class Todo extends Note {
  constructor({ status, date, text }) {
    super({ text, date });
    this.status = status;
  }

  getNoteType() {
    return "TODO";
  }

  generateCard() {
    return `<div class="card my-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${this.text}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${this.status}</h6>
      <p class="card-text">Due on: ${formatDate(this.date)}</p>
    </div>
  </div>`;
  }
}

module.exports = Todo;
