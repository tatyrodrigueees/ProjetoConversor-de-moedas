function convertToReal(inputValue) {
  const exchangeRate = 5.7;
  const realValue = inputValue * exchangeRate;
  alert(`O valor em real é R$ ${realValue.toFixed(2)}`);
}

const dollarInput = document.querySelector("#dollarInput");
dollarInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    convertToReal(this.value);
  }
});