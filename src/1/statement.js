function statement(invoice, plays) {
  const statementData = {
    customer: invoice.customer,
    performances: invoice.performances.map(enrichPerformance),
  };

  return renderPlainText(statementData, plays);

  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(aPerformance);

    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }
}

module.exports = { statement };

function renderPlainText(data, plays) {
  let result = `Statement for ${data.customer}\n`;

  for (let perf of data.performances) {
    // 청구 내역 출력
    result += `${perf.play.name}: ${usd(amountFor(perf) / 100)} (${
      perf.audience
    } seats)\n`;
  }

  result += `Amount owed is ${usd(totalAmount() / 100)}\n`;
  result += `You earned ${totalVolumeCredits()} credits\n`;

  return result;

  function totalAmount() {
    return data.performances.reduce((acc, perf) => acc + amountFor(perf), 0);
  }

  function totalVolumeCredits() {
    return data.performances.reduce(
      (acc, perf) => acc + volumeCreditsFor(perf),
      0
    );
  }

  function usd(number) {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(number);
  }

  function volumeCreditsFor(aPerformance) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);

    if ("comedy" === aPerformance.play.type) {
      result += Math.floor(aPerformance.audience / 5);
    }

    return result;
  }

  function amountFor(aPerformance) {
    let result = 0;

    switch (aPerformance.play.type) {
      case "tragedy":
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;

      case "comedy":
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;

      default:
        throw new Error(`unknown type: ${aPerformance.play.type}`);
    }

    return result;
  }
}