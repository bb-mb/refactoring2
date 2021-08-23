const { statement, htmlStatement } = require("./statement");

const invoices = require("./invoices.json");
const plays = require("./plays.json");

test("statement", () => {
  expect(statement(invoices, plays)).toBe(
    "Statement for BigCo\nHamlet: $650.00 (55 seats)\nAs You Like It: $580.00 (35 seats)\nOthello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n"
  );
});

test("htmlStatement", () => {
  expect(htmlStatement(invoices, plays)).toBe(
    "<h1>Statement for BigCo</h1>\n<table>\n<tr><th>play</th><th>seats</th><th>cost</th></tr><tr><td>Hamlet</td><td>55</td><td>$65,000.00</td></tr>\n<tr><td>As You Like It</td><td>35</td><td>$58,000.00</td></tr>\n<tr><td>Othello</td><td>40</td><td>$50,000.00</td></tr>\n</table>\n<p>Amount owed is <em>$173,000.00</em></p>\n<p>You earned <em>47</em> credits</p>\n"
  );
});
