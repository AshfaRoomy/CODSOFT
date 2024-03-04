let input = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (a) =>{
        if(a.target.innerHTML == '='){
            string = eval(string);
        }

        else if(a.target.innerHTML == 'AC'){
            string = "";
        }

        else if(a.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
        }

        else{
            string += a.target.innerHTML;
        }
        input.value = string;

       
    });
});