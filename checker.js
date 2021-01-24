let input;
input = document.querySelector('.input')
const info = document.querySelector('.passwordInfo')

//RULES
const bigLetters = /[A-Z]/
const bigNumbers = /[0-9]/
const special = /[!@#^&$*()%;]/;


const bar = document.querySelector('.bar')
const checker = () => {
    console.log(input.value);
    if(input.value.length >= 10) {
        info.classList.remove('unhide')
        if(input.value.match(bigLetters)) {
            info.classList.remove('unhide')
            if(input.value.match(bigNumbers)) {
                info.classList.remove('unhide')
                if(input.value.match(special)) {
                    info.classList.add('unhide')
                    info.style.color = 'green'
                    info.textContent = 'Great Password!';
                    bar.style.backgroundColor = 'green'
                    bar.style.width = '100%';
                    bar.textContent = '100%';
                }
                else {
                    info.style.color = 'red'
                    info.textContent = 'Without Special!'
                    info.classList.add('unhide')
                    bar.style.backgroundColor = 'lightgreen'
                    bar.style.width = '75%';
                    bar.textContent = '75%';
                }
            }
            else {
                info.style.color = 'red'
                info.textContent = 'Without numbers!'
                info.classList.add('unhide')
                bar.style.backgroundColor = 'yellow'
                bar.style.width = '50%';
                bar.textContent = '50%';
            }
        }
        else {
            info.style.color = 'red'
            info.textContent = 'Without big letter!'
            info.classList.add('unhide')
            bar.style.backgroundColor = 'red'
            bar.style.width = '25%';
            bar.textContent = '25%';
        }
    }
    else {
        info.style.color = 'red'
        info.textContent = 'Without 10 length!'
        info.classList.add('unhide')
        bar.style.backgroundColor = 'red'
        bar.style.width = '10%';
        bar.textContent = '10%';
    }
}


input.addEventListener('keyup', checker)
