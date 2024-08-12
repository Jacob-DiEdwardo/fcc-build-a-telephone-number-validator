const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const regex = /^(1[[\s-]?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

const validatePhoneNumber = () => {
  const input = userInput.value;
  if (input === '') {
    alert('Please provide a phone number');
    return;
  }

  const isValid = regex.test(input);

  const result = document.createElement('p');
  result.className = `${isValid ? '' : 'in'}valid`;
  result.innerText = `${isValid ? 'V' : 'Inv'}alid US number: ${input}`;
  resultsDiv.appendChild(result);
  userInput.value = '';
};

checkBtn.addEventListener('click', () => {
  validatePhoneNumber();
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    validatePhoneNumber();
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});
