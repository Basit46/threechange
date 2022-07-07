const textarea = document.querySelector("textarea");
const button = document.querySelector('.change');
const clearBtn = document.querySelector('.clear');
const output = document.querySelector('.output');

button.addEventListener("click", function(){
    let textvalue = textarea.value;
    let words = textvalue.split('')
    let don = textvalue.replace(/E|e/g, 3);
    output.textContent = don;
})

clearBtn.addEventListener("click", function(){
    textarea.value = "";
    output.textContent = ""
})