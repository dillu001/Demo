const display =document.getElementById('display');
function calculate(input){
  display.value += input;
  if (display.value === '1+,calculater()'){
    display.value = 'NEVER SETTLE';
    display.style.color ='red';
  }
  
}
function clearScreen(){
  display.value="";
}
function calculater() {
  try {
    // Tab to edit
    display.value = eval(display.value);
  } catch (error) {
     display.value ='error';
     display.style.color='red';
    
  }

}
function backspace(){
  display.value = display.value.slice(0,-1);
}