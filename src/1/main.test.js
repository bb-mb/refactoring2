const { statement } = require("./statement");

const invoices = require("./invoices.json");
const plays = require("./plays.json");

test("statement", () => {
  expect(statement(invoices, plays)).toBe(
    "Statement for BigCo\nHamlet: $650.00 (55 seats)\nAs You Like It: $580.00 (35 seats)\nOthello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n"
  );
});
