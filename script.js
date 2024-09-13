const button = document.getElementById("check-btn");
const inputElement = document.getElementById("text-input");
 const result = document.getElementById("result")
 

button.addEventListener("click",()=>{
const inputValue = inputElement.value.trim();
  if(!inputValue){
    alert("Please input a value")
  }
 else{
    const normalValue= inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); //the regex matches anything not a number or an alphabet
    const reverseValue= normalValue.split("").reverse().join("")
    if(normalValue===reverseValue){
      result.innerText= `${inputValue} is a palindrome`
    }else{
      result.innerText= `${inputValue} is not a palindrome`
    }
  }
})
