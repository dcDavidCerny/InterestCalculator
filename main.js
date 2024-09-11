document.getElementById("submitInput").addEventListener("click", function (event) {
  event.preventDefault();
  let firstDeposit = document.getElementById("firstDeposit").value;
  let monthlyDeposit = document.getElementById("monthlyDeposit").value;
  let interestRate = document.getElementById("interestRate").value;
  let investmentDuration = document.getElementById("investmentDuration").value;
  let tax1 = document.getElementById("tax1").value;
  let tax2 = document.getElementById("tax2").value;
});

function calculateTheWithdraw() {
  let total = 0;
  for (i = 0; i <= investmentDuration; i++) {

  }
}
