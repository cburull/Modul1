// controller
function chooseBar(clickedBar){
    chosenBar!=clickedBar ? chosenBar=clickedBar : chosenBar=-1;
    show();
}
function addBar(){
    if (inputValue>=1 && inputValue<=10) {
        if (numbers.length==maxNuberOfBars) {
            errorMessage=`Maks stolper tillatt: ${maxNuberOfBars}.`;
        }
        else {
            numbers.push(inputValue);
            errorMessage='';
        }
    }
    else errorMessage='Verdi må være et tall fra 1 til 10.';
    chosenBar=-1;
    show();
}
function removeBar(){
    numbers.splice(chosenBar-1,1);
    errorMessage='';
    chosenBar=-1;
    show();
}
function changeBar(){
    if (inputValue>=1 && inputValue<=10) {
        numbers[chosenBar-1]=inputValue;
        errorMessage='';
    }
    else errorMessage='Verdi må være et tall fra 1 til 10.';
    show();
}