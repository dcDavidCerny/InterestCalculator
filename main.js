import Chart from 'chart.js/auto';

let chartInstance; // Declare chartInstance globally

document.getElementById("submitInput").addEventListener("click", function (event) {
  event.preventDefault();

  // First investment inputs
  let firstDeposit = document.getElementById("firstDeposit").value;
  let monthlyDeposit = document.getElementById("monthlyDeposit").value;
  let interestRate = document.getElementById("interestRate").value;
  let investmentDuration = document.getElementById("investmentDuration").value;
  let Depositfee = document.getElementById("depositFee").value;
  let feeYearly = document.getElementById("feeYearly").value;
  const rate = interestRate / 100;

  // Calculate first investment totals
  let total = 0;
  let everyYearTotal = [];
  total += firstDeposit - Depositfee;
  let totalDepositted = Number(firstDeposit);

  for (let i = 0; i < investmentDuration; i++) {
    total += total * rate;
    total += monthlyDeposit * 12;
    total += monthlyDeposit * 6 * rate;
    total -= total * feeYearly / 100;
    everyYearTotal.push(Math.round(total));
    totalDepositted += monthlyDeposit * 12;
  }

  // Display first investment results
  document.querySelector(".totalToWithdrawResult").innerHTML = Math.round(total);
  document.querySelector(".totalDeposittedResult").innerHTML = Math.round(totalDepositted);
  document.querySelector(".percentageGainResult").innerHTML = Math.round(((total - totalDepositted) / totalDepositted) * 100) + "%";

  // Update labels visibility and names
  document.querySelectorAll("#resultLabel").forEach((label) => {
    label.style.visibility = "visible";
  });

  document.querySelector(".nameOfInvestmentH3A").innerHTML = document.getElementById("nameOfInvestment").value + ":";
  document.querySelector(".nameOfInvestmentH3B").innerHTML = document.getElementById("nameOfInvestment2").value + ":";

  if (document.getElementById("nameOfInvestment").value === "") {
    document.querySelector(".nameOfInvestmentH3A").innerHTML = "Modrá investice:";
  }

  if (document.getElementById("nameOfInvestment2").value === "") {
    document.querySelector(".nameOfInvestmentH3B").innerHTML = "Červená investice:";
  }

  // Second investment inputs
  let firstDeposit2 = document.getElementById("firstDeposit2").value;
  let monthlyDeposit2 = document.getElementById("monthlyDeposit2").value;
  let interestRate2 = document.getElementById("interestRate2").value;
  let Depositfee2 = document.getElementById("depositFee2").value;
  let feeYearly2 = document.getElementById("feeYearly2").value;
  const rate2 = interestRate2 / 100;

  // Calculate second investment totals
  let total2 = 0;
  let everyYearTotal2 = [];
  total2 += firstDeposit2 - Depositfee2;
  let totalDepositted2 = Number(firstDeposit2);

  for (let i = 0; i < investmentDuration; i++) {
    total2 += total2 * rate2;
    total2 += monthlyDeposit2 * 12;
    total2 += monthlyDeposit2 * 6 * rate2;
    total2 -= total2 * feeYearly2 / 100;
    everyYearTotal2.push(Math.round(total2));
    totalDepositted2 += monthlyDeposit2 * 12;
  }

  // Display second investment results
  document.querySelector(".totalToWithdrawResult2").innerHTML = Math.round(total2);
  document.querySelector(".totalDeposittedResult2").innerHTML = Math.round(totalDepositted2);
  document.querySelector(".percentageGainResult2").innerHTML = Math.round(((total2 - totalDepositted2) / totalDepositted2) * 100) + "%";

  // Number formatting for all numbers
  const numberFormatter = new Intl.NumberFormat('fr-FR');

  function formatAllNumbers() {
    const numberElements = document.querySelectorAll('.number-format');
    numberElements.forEach((element) => {
      const number = parseFloat(element.innerText.replace(/\s+/g, ''));
      if (!isNaN(number)) {
        element.innerText = numberFormatter.format(number);
      }
    });
  }

  // Call the function to format all numbers
  formatAllNumbers();

  // Define investment names
  let investmentName = document.getElementById("nameOfInvestment").value;
  let investmentName2 = document.getElementById("nameOfInvestment2").value;

  // Chart initialization
  const ctx = document.getElementById('myChart');
  const labels = [];
  for (let i = 1; i <= investmentDuration; i++) {
    labels.push(`${i}. Rok`);
  }

  if (chartInstance) {
    chartInstance.destroy(); // Destroy the previous chart
  }

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: `${investmentName}`,
        data: everyYearTotal,
        borderWidth: 5,
        borderColor: "rgb(54, 139, 213)"
      },
      {
        label: `${investmentName2}`,
        data: everyYearTotal2,
        borderWidth: 5,
        borderColor: "rgba(255, 20, 78, 0.85)"
      }]
    },
    options: {
      scales: {
        x: {
          ticks: {
            font: {
              size: 22
            }
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              size: 22
            }
          }
        }
      },
      plugins: {
        tooltip: {
          titleFont: {
            size: 17
          },
          bodyFont: {
            size: 21
          }
        }
      }
    }
  });
});