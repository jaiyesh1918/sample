let count=0;
function increaseCount(){
    count++
    displayCount();
    checkCountValue();
}
function displayCount(){
    document.getElementById("countDisplay").innerText=count;
}
function checkCountValue(){
    if (count===10){
        alert("sudi tirigindhi rey ! 10 mandhi followers 😊")
    }
    else if (count===20){
        alert("malli sudi tirigindhi rey ! 20 mandhi followers 😊")
    }
}
function resetCount(){
    count=0
    document.getElementById("countDisplay").innerText=count;

}