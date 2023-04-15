

const inputEl = document.getElementById('validation-input') 
 
inputEl.addEventListener('blur', onInputElBorderColor)  
 
function onInputElBorderColor() { 
     
    const inputDataLength = document.querySelector('[data-length]'); 
  
 
    if (Number(inputDataLength.dataset.length) === inputEl.value.trim().length){ 
        inputEl.classList.add('valid'); 
        inputEl.classList.remove('invalid'); 
    } 
    else { 
        inputEl.classList.add('invalid'); 
        inputEl.classList.remove('valid'); 
    } 
i}