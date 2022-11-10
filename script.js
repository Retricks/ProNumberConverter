function Err(){
    document.querySelector('#number').value = "";
    document.querySelector('#result').innerHTML = `Wpisz poprawną liczbę`
}
function change(x, y) {
    const number = document.querySelector('#number').value
    const numberCheck = parseInt(number)
    if(isNaN(numberCheck) && y != 16 || number.includes('-')){
        Err()
    }
    else{
        switch(x){
            case 2:
                var result = parseInt(number).toString(x)
                break
            case 16:
                var result = parseInt(number).toString(x)
                break
            case 8:
                var result = parseInt(number).toString(x)
                break
            case 10:
                if(y==2){
                    var result = parseInt(number, 2)
                    break
                }
                else if(y==16){
                    var result = parseInt(number, 16)
                    break
                }
                else if(y==8){
                    var result = parseInt(number, 8)
                    break
                }
        }
        if(result == undefined || isNaN(result) || result == null){
            Err()
        }
        else{
            document.querySelector('#result').innerHTML = `Wynik: ${result}`
            document.querySelector('#number').value = ""
        }
    }
}