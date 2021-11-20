const inquirer = require("inquirer");
const { Bill, Todo, Appointment } = require("./lib");

inquirer.registerPrompt("datepicker", require("inquirer-datepicker"));

const {
  noteTypeQuestion,
  billQuestions,
  appointmentQuestions,
  todoQuestions,
  continueQuestion,
} = require("./questions");
const { categoriseNotes, generateHtml, writeToFile } = require("./utils");

const start = async () => {
  let inProgress = true;
  const notes = [];

  while (inProgress) {
    const { noteType } = await inquirer.prompt(noteTypeQuestion);

    if (noteType === "BILL") {
      const { text, amount, date } = await inquirer.prompt(billQuestions);
      const bill = new Bill({ text, amount, date });
      notes.push(bill);
    }

    if (noteType === "TODO") {
      const { text, date, status } = await inquirer.prompt(todoQuestions);
      const todo = new Todo({ text, date, status });
      notes.push(todo);
    }

    if (noteType === "APPOINTMENT") {
      const { text, date, eventType, otherEvent } = await inquirer.prompt(
        appointmentQuestions
      );
      const appointment = new Appointment({
        text,
        date,
        eventType,
        otherEvent,
      });
      notes.push(appointment);
    }

    const { anotherNote } = await inquirer.prompt(continueQuestion);

    if (!anotherNote) {
      inProgress = false;
    }
  }

  const categorisedNotes = categoriseNotes(notes);

  const html = generateHtml(categorisedNotes);

  writeToFile("./dist/index.html", html);

  console.log("Successfully generated HTML!!");

  process.exit(0);
};

start();
