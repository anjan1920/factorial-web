console.log("HEllO js is working");

//factorial logic
function factorial(value) {
  const ans = [1];

  for (let i = 2; i <= value; i++) {
    let carry = 0;

    for (let j = 0; j < ans.length; j++) {

      let num = ans[j] * i + carry;
      let digit = num %10;
      carry = Math.floor(num / 10);
      
      ans[j] = digit;
      
    }

    while (carry > 0) {
      ans.push(carry % 10);
      carry = Math.floor(carry / 10);
    }
  }

  return ans.reverse().join(''); //convert to string
}

// value = factorial(20)
// console.log(value);

// Handle Calculate
function handleCalculate() {
  const inputValue = document.querySelector("#numberInput").value;
  const resultBox = document.querySelector("#resultArea");

  if (inputValue === "" || isNaN(inputValue) || inputValue < 0) {
    resultBox.innerText = "Enter a valid positive number.";
    return;
  }

  // Show loading message
  resultBox.innerHTML = `<div class="animate-pulse text-blue-600">Calculating...</div>`;

  // Wait 
  if(inputValue <=50){
    //wait 0.1 sec
    setTimeout(() => {
    const result = factorial(parseInt(inputValue));
    resultBox.innerText = `Factorial: ${result}`;
    }, 100);
  }else{
    setTimeout(() => {
    const result = factorial(parseInt(inputValue));
    resultBox.innerText = `Factorial: ${result}`;
    }, 3000);

  }
  
}

// Handle Clear
function handleClear() {
  document.querySelector("#numberInput").value = "";
  document.querySelector("#resultArea").innerText = "";
}

//  events
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#calculateBtn").addEventListener("click",()=>{
    console.log("Calcute clicked ")
    handleCalculate();

  });
  document.querySelector("#clearBtn").addEventListener("click", ()=>{
    console.log("Clear clicked ")
    handleClear();
  });
});