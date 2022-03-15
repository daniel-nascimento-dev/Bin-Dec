document.querySelector('.convert-bin').addEventListener('click', bin2Dec);

// will take the numbers 1 and 0
document.querySelector('.numberBin').addEventListener('keydown', (event)=> {

    let numeroBin = document.querySelector('.numberBin');
    let result = document.querySelector('.result-desc');

    n = numeroBin.value;

    // valid keys 0, 1 and Backspace
    if(event.key != '1' && event.key != '0' && event.key != 'Backspace' && event.key != 'F5'){
        result.innerHTML = 'número inválido!';
        event.preventDefault();
    } 

    // case Enter ou Backspace
    switch(event.key){
        
        case 'Enter':
            return bin2Dec();
            break;
        case 'Backspace':
            return event.key;
            break;

    }

    // n value size
    if(n.length >= 8){
        event.preventDefault();
    }

});

// function will convert binary number to decimal
function bin2Dec(bin){
    
    let result = document.querySelector('.result-desc');
    let numeroBin = document.querySelector('.numberBin');
    bin = numeroBin.value;


    let decimal = 0;

    for(let index = bin.length-1; index >= 0; index--){
        decimal += parseInt(bin[index]) * Math.pow(2, bin.length-1-index);
    }

    result.innerHTML = decimal;
}