let input;
input = document.querySelector('.input')
const info = document.querySelector('.passwordInfo')

//RULES
const bigLetters = /[A-Z]/
const bigNumbers = /[0-9]/
const special = /[!@#^&$*()%;]/;



const checker = () => {
    console.log(input.value);
    if(input.value.length >= 10) {
        info.classList.remove('unhide')
        if(input.value.match(bigLetters)) {
            info.classList.remove('unhide')
            if(input.value.match(bigNumbers)) {
                info.classList.remove('unhide')
                if(input.value.match(special)) {
                    console.log('Bezpieczne hasło');
                    info.classList.add('unhide')
                    info.style.color = 'green'
                    info.textContent = 'Bezpieczne hasło!';
                }
                else {
                    info.style.color = 'red'
                    info.textContent = 'Brak Specjalnych znaków!'
                    info.classList.add('unhide')
                }
            }
            else {
                info.style.color = 'red'
                info.textContent = 'Brak Liczb!'
                info.classList.add('unhide')
            }
        }
        else {
            info.style.color = 'red'
            info.textContent = 'Brak Dużych Liter!'
            info.classList.add('unhide')
        }
    }
    else {
        info.style.color = 'red'
        info.textContent = 'Brak 10 znaków!'
        info.classList.add('unhide')
    }
}


input.addEventListener('keyup', checker)
