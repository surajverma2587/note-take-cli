const { formatDate } = require("../utils");
const Note = require("./Note");

class Appointment extends Note {
  constructor({ eventType, date, text, otherEvent = "" }) {
    super({ text, date });
    this.eventType = eventType;
    this.otherEvent = otherEvent;
  }

  getNoteType() {
    return "APPOINTMENT";
  }

  generateCard() {
    return `<div class="card my-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${this.text}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${
        this.eventType === "OTHER"
          ? `${this.eventType}: ${this.otherEvent}`
          : this.eventType
      }</h6>
      <p class="card-text">Due on: ${formatDate(this.date)}</p>
    </div>
  </div>`;
  }
}

module.exports = Appointment;
