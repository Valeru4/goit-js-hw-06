
const inputEl = document.getElementById('name-input')
const outputEl = document.getElementById('name-output')
    
    
inputEl.addEventListener('input', onInputEntertext)

function onInputEntertext() {
    if (inputEl.value !== '') { outputEl.textContent = inputEl.value; }
    else {
        outputEl.textContent = outputEl.textContent;
    }
}


