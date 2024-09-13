import Chart from 'chart.js/auto';
document.getElementById("submitInput").addEventListener("click", function (event) {
  event.preventDefault();
  let firstDeposit = document.getElementById("firstDeposit").value;
  let monthlyDeposit = document.getElementById("monthlyDeposit").value;
  let interestRate = document.getElementById("interestRate").value;
  let investmentDuration = document.getElementById("investmentDuration").value;
  let Depositfee = document.getElementById("depositFee").value;
  let feeYearly = document.getElementById("feeYearly").value;
  const rate = interestRate / 100;

  let total = 0;
  let everyYearTotal = [];
  total += firstDeposit;
  total -= Depositfee;
  let totalDepositted = Number(firstDeposit);

  for (let i = 0; i < investmentDuration; i++) {
    total += total * rate;
    total += monthlyDeposit * 12;
    total += monthlyDeposit * 6 * rate;
    total -= total * feeYearly / 100;
    everyYearTotal.push(Math.round(total));
    totalDepositted += monthlyDeposit * 12;
  }


  document.querySelector(".totalToWithdrawResult").innerHTML = Math.round(total);
  document.querySelector(".totalDeposittedResult").innerHTML = Math.round(totalDepositted);
  document.querySelector(".percentageGainResult").innerHTML = Math.round(((total - totalDepositted) / totalDepositted) * 100) + "%";






















  let firstDeposit2 = document.getElementById("firstDeposit2").value;
  let monthlyDeposit2 = document.getElementById("monthlyDeposit2").value;
  let interestRate2 = document.getElementById("interestRate2").value;
  let Depositfee2 = document.getElementById("depositFee2").value;
  let feeYearly2 = document.getElementById("feeYearly2").value;
  const rate2 = interestRate2 / 100;

  let total2 = 0;
  let everyYearTotal2 = [];
  total2 += firstDeposit2;
  total2 -= Depositfee2;
  let totalDepositted2 = Number(firstDeposit2);

  for (let i = 0; i < investmentDuration; i++) {
    total2 += total2 * rate2;
    total2 += monthlyDeposit2 * 12;
    total2 += monthlyDeposit2 * 6 * rate2;
    total2 -= total2 * feeYearly2 / 100;
    everyYearTotal2.push(Math.round(total2));
    totalDepositted2 += monthlyDeposit2 * 12;
  }


  document.querySelector(".totalToWithdrawResult").innerHTML = Math.round(total);
  document.querySelector(".totalDeposittedResult").innerHTML = Math.round(totalDepositted);
  document.querySelector(".percentageGainResult").innerHTML = Math.round(((total - totalDepositted) / totalDepositted) * 100) + "%";























  const ctx = document.getElementById('myChart');

  const labels = [];
  for (let i = 1; i <= investmentDuration; i++) {
    labels.push(`${i}. Rok`);
  }
  if (chartInstance) {
    chartInstance.destroy();
  }
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: `spoření 1`,
        data: everyYearTotal,
        borderWidth: 5
      },
      {
        label: `spoření 2`,
        data: everyYearTotal2,
        borderWidth: 5
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });







});

let chartInstance = null;