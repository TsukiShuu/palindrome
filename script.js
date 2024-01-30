const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const isPalindrome = (str) => {
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
    };

const showResult = (input, isPalindrome) => {
    resultDiv.innerHTML = `<p class="user-input"><strong>${input}</strong> ${isPalindrome ? 'is' : 'is not'} a palindrome.</p>`;
    };

const checkForPalindrome = () => {
  const input = userInput.value;

  if (input === '') {
        alert('Please input a value');
        return;
      }

  showResult(input, isPalindrome(input));
      userInput.value = '';
    };

  checkPalindromeBtn.addEventListener('click', checkForPalindrome);

  userInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        checkForPalindrome();
      }
    });
