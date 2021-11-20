const { validateNumber, validateInput } = require("./utils");

const noteTypeQuestion = {
  type: "list",
  name: "noteType",
  message: "Select not type:",
  choices: [
    {
      name: "Bill",
      value: "BILL",
    },
    {
      name: "Todo",
      value: "TODO",
    },
    {
      name: "Appointment",
      value: "APPOINTMENT",
    },
  ],
};

const billQuestions = [
  {
    type: "input",
    name: "text",
    message: "Enter payee:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "amount",
    message: "Enter amount:",
    validate: validateNumber,
  },
  {
    type: "datepicker",
    name: "date",
    message: "Due on:",
    default: new Date(),
  },
];

const todoQuestions = [
  {
    type: "input",
    name: "text",
    message: "Enter task todo:",
    validate: validateInput,
  },
  {
    type: "datepicker",
    name: "date",
    message: "Due on:",
    default: new Date(),
  },
  {
    type: "list",
    name: "status",
    message: "Select status:",
    choices: [
      {
        name: "Incomplete",
        value: "INCOMPLETE",
      },
      {
        name: "In Progress",
        value: "IN_PROGRESS",
      },
      {
        name: "Complete",
        value: "COMPLETE",
      },
    ],
  },
];

const appointmentQuestions = [
  {
    type: "input",
    name: "text",
    message: "Enter appointment details:",
    validate: validateInput,
  },
  {
    type: "datepicker",
    name: "date",
    message: "Appointment on:",
    default: new Date(),
  },
  {
    type: "list",
    name: "eventType",
    message: "Select appointment:",
    choices: [
      {
        name: "Virtual Meeting",
        value: "VIRTUAL",
      },
      {
        name: "In Person",
        value: "IN_PERSON",
      },
      {
        name: "Phone",
        value: "PHONE",
      },
      {
        name: "Other",
        value: "OTHER",
      },
    ],
  },
  {
    type: "input",
    name: "otherEvent",
    message: "Please provide details of other type appointment:",
    when: ({ eventType }) => eventType === "OTHER",
    validate: validateInput,
  },
];

const continueQuestion = {
  type: "confirm",
  name: "anotherNote",
  message: "Do you want to add another note?",
};

module.exports = {
  noteTypeQuestion,
  billQuestions,
  todoQuestions,
  appointmentQuestions,
  continueQuestion,
};
