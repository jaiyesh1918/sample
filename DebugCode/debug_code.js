function performOperation(){
    let num1=parseInt(document.getElementById('input1').value)
    let num2=parseInt(document.getElementById('input2').value)
    if(!isNaN(num1)&&!isNaN(num2)){
        let result=multiply(num1,num2);
        displayResult(result);
    }
    else{
        displayResult('saraina sankyalanu ivvandi !');
    }
}
function multiply(a,b){
     // Introduce a debugger statement to pause execution
    debugger;
    return a*b;
}
function displayResult(result){
    document.getElementById('result').textContent=`The result is: ${result}`;
}