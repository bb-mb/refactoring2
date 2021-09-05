let customerData = {
  1920: {
    name: "martin",
    id: "1920",
    usages: {
      2016: {
        1: 50,
        2: 55,
        // remaining months of the year
      },
      2015: {
        1: 70,
        2: 63,
        // remaining months of the year
      },
    },
  },
};

function getRawDataOfCustomer() {
  return customerData;
}

function setRawDataOfCustomer(arg) {
  customerData = arg;
}
