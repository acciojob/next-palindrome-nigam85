function nextPalindrome(num) {
  //your JS code here.
	 const numStr = num.toString();

  // Reverse the string and check if it's the same as the original
  return numStr === numStr.split('').reverse().join('');
}

function nextPalindrome(input) {
  let num = input + 1;

  while (true) {
    if (isPalindrome(num)) {
      alert(num);
      return;
    }
    num++;
  }
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
