let randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  const input = document.getElementById("userInput");
  const result = document.getElementById("result");
  const attemptsLabel = document.getElementById("attempts");

  input.addEventListener("keydown", function(event) {
    if(event.key === "Enter") checkNumber();
  });

  function checkNumber() {
    let userNumber = parseInt(input.value);
    if (isNaN(userNumber)) {
      result.textContent = "Введите число!";
      result.style.color = "#ff6b6b";
      return;
    }

    attempts++;
    attemptsLabel.textContent = `Попыток: ${attempts}`;

    if (userNumber < randomNumber) {
      result.textContent = "Больше!";
      result.style.color = "#3498db";
    } else if (userNumber > randomNumber) {
      result.textContent = "Меньше!";
      result.style.color = "#e74c3c";
    } else {
      result.textContent = `Поздравляем! Вы угадали число!`;
      result.style.color = "#2ecc71";
    }

    input.value = "";
  }

  function newGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsLabel.textContent = `Попыток: ${attempts}`;
    result.textContent = "";
    input.value = "";
  }
