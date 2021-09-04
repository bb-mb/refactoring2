function printOwing(invoice) {
  printBanner();
  recordDueDate();
  printDetails();

  function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth());
  }

  function calcOutstanding(invoice) {
    let outstanding = 0;
    for (const order of invoice.orders) {
      outstanding += order.amount;
    }
    return outstanding;
  }

  function printDetails(invoice) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${calcOutstanding(invoice)}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
  }

  function printBanner() {
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
  }
}
