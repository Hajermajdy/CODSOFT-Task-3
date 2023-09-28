
let equal = document.querySelector('.equal');
let inputdata = document.querySelector("input");
let button = document.querySelectorAll('button');
let finalresualt = 0;



console.log();
for(let i=0;i<button.length;i++){
    
    button[i].addEventListener("click", () => {
        if (button[i].innerText == 'C'){
            inputdata.value = ' ';
        }
        else if (button[i].innerText == 'Del'){
            inputdata.value = inputdata.value.slice(0,-1)
        }
        else if (button[i].innerText != '=') {
            inputdata.value += button[i].innerText;
        }
        else{
            finalresualt = eval(inputdata.value) 
            inputdata.value = finalresualt
        }
    })
    
}



