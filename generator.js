
        let password;
        let letters = '';
        let letteri;
        let letter;
        let gen = document.querySelector('.gene')
        gen.addEventListener('click', () => {
        letters = '';

            //7 lower CASE
        for(let i = 0; i<7; i++) {
            letteri = Math.floor(Math.random() * 25) 
            console.log(letteri);
            letteri = letteri.toString()
            switch(letteri) {
                case '0': 
                    letter = 'A'
                    break;
                case '1': 
                    letter = 'B'
                    break;
                case '2': 
                    letter = 'C'
                    break;
                case '3': 
                    letter = 'D'
                    break;
                case '4': 
                    letter = 'E'
                    break;
                case '5': 
                    letter = 'F'
                    break;
                case '6': 
                    letter = 'G'
                    break;
                case '7': 
                    letter = 'H'
                    break;
                case '8': 
                    letter = 'I'
                    break;
                case '9': 
                    letter = 'J'
                    break;    
                case '10': 
                    letter = 'K'
                    break;   
                case '11': 
                    letter = 'L'
                    break;   
                case '12': 
                    letter = 'M'
                    break;   
                case '13': 
                    letter = 'N'
                    break;   
                case '14': 
                    letter = 'O'
                    break;   
                case '15': 
                    letter = 'P'
                    break;   
                case '16': 
                    letter = 'Q'
                    break;   
                case '17': 
                    letter = 'R'
                    break;   
                case '18': 
                    letter = 'S'
                    break;   
                case '19': 
                    letter = 'T'
                    break;   
                case '20': 
                    letter = 'U'
                    break;   
                case '21': 
                    letter = 'V'
                    break; 
                case '22': 
                    letter = 'W'
                    break; 
                case '23': 
                    letter = 'X'
                    break; 
                case '24': 
                    letter = 'Y'
                    break; 
                case '25': 
                    letter = 'Z'
                    break; 
                default: 
                    letter = '.'
            }
            
            letters = letters + letter
            }
            letters = letters.toLowerCase()
            //1 Upper CASE
            for(let i = 0; i<1; i++) {
            letteri = Math.floor(Math.random() * 25) 
            console.log(letteri);
            letteri = letteri.toString()
            switch(letteri) {
                case '0': 
                    letter = 'A'
                    break;
                case '1': 
                    letter = 'B'
                    break;
                case '2': 
                    letter = 'C'
                    break;
                case '3': 
                    letter = 'D'
                    break;
                case '4': 
                    letter = 'E'
                    break;
                case '5': 
                    letter = 'F'
                    break;
                case '6': 
                    letter = 'G'
                    break;
                case '7': 
                    letter = 'H'
                    break;
                case '8': 
                    letter = 'I'
                    break;
                case '9': 
                    letter = 'J'
                    break;    
                case '10': 
                    letter = 'K'
                    break;   
                case '11': 
                    letter = 'L'
                    break;   
                case '12': 
                    letter = 'M'
                    break;   
                case '13': 
                    letter = 'N'
                    break;   
                case '14': 
                    letter = 'O'
                    break;   
                case '15': 
                    letter = 'P'
                    break;   
                case '16': 
                    letter = 'Q'
                    break;   
                case '17': 
                    letter = 'R'
                    break;   
                case '18': 
                    letter = 'S'
                    break;   
                case '19': 
                    letter = 'T'
                    break;   
                case '20': 
                    letter = 'U'
                    break;   
                case '21': 
                    letter = 'V'
                    break; 
                case '22': 
                    letter = 'W'
                    break; 
                case '23': 
                    letter = 'X'
                    break; 
                case '24': 
                    letter = 'Y'
                    break; 
                case '25': 
                    letter = 'Z'
                    break; 
                default: 
                    letter = '.'
            }
            
            letters = letter + letters
            }
            //NUMBER
            for(let i = 0; i<1; i++) {
            letteri = Math.floor(Math.random() * 9) 
            console.log(letteri);
            letteri = letteri.toString()
            letters = letters + letteri
            }
            //SPECIAL
            for(let i = 0; i<1; i++) {
            letteri = Math.floor(Math.random() * 10) 
            console.log(letteri);
            letteri = letteri.toString()
            switch(letteri) {
                case '0': 
                    letter = '?'
                    break;
                case '1': 
                    letter = ')'
                    break;
                case '2': 
                    letter = '('
                    break;
                case '3': 
                    letter = '*'
                    break;
                case '4': 
                    letter = '&'
                    break;
                case '5': 
                    letter = '^'
                    break;
                case '6': 
                    letter = '%'
                    break;
                case '7': 
                    letter = '#'
                    break;
                case '8': 
                    letter = '@'
                    break;
                case '9': 
                    letter = '$'
                    break;    
                case '10': 
                    letter = '!'
                    break;   
                default: 
                    letter = '.'
            }
            
            letters = letters + letter
            }
            
            console.log(letters);
            input = document.querySelector('.input')
            input.value = letters;
            info.classList.add('unhide')
            info.style.color = 'green'
            info.textContent = 'Great Password!';
        })

        