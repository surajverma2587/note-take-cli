const { formatDate } = require("../utils");
const Note = require("./Note");

class Bill extends Note {
  constructor({ amount, date, text }) {
    super({ text, date });
    this.amount = amount;
  }

  getNoteType() {
    return "BILL";
  }

  generateCard() {
    return `<div class="card my-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${this.text}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${this.amount}</h6>
      <p class="card-text">Due on: ${formatDate(this.date)}</p>
    </div>
  </div>`;
  }
}

module.exports = Bill;
