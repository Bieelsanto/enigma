const swap = document.getElementById('swap');


(function(){
    for(let i = 1;i<27;i++){
        createLabels(i);
        createInputs(i);
        if(i%2==0){
            (function(){
                let j = document.createElement('br');
                swap.appendChild(j);
            }());
        };
    };
}());

function createInputs(i){
    let j = document.createElement('input');
    j.type = 'text';
    j.name = NumberToWord(i)+'wordName';
    j.id = NumberToWord(i)+'wordInput';
    j.className = 'wordInput';
    j.value = '';
    j.minLength = 1;
    j.maxLength = 1;
    j.autocomplete = 'off';
    j.style.textTransform = 'uppercase'
    swap.appendChild(j);
};

function createLabels(i){
    let j = document.createElement('label');
    j.htmlFor = NumberToWord(i)+'wordInput';
    j.className = 'wordLabel';
    j.innerHTML = NumberToWord(i).toUpperCase();
    swap.appendChild(j);
};

function WordToNumber(word){
    word = word.toLowerCase();
    return word.charCodeAt(0)-96;;
};

function NumberToWord(number){
    return String.fromCharCode(number+96);
};

function change(){
    for(let i = 1; i < 27; i++){
        (function(){
            let input1 = document.getElementById(NumberToWord(i)+'wordInput');
            j = input1.value;
            if(WordToNumber(j) < 26 && WordToNumber(j) > 0){
                if(j !== NumberToWord(i)){
                    let input2 = document.getElementById(j+'wordInput') ;
                    if(!input2.value){
                        input2.value = NumberToWord(i);
                        input1.readOnly = true;
                        input1.style.border = '2px solid blue';
                        input2.readOnly = true;
                        input2.style.border = '2px solid blue';
                    };
                    
                };
            };
        }());
    };
};

function resetOutput(){
    i = document.getElementById('output');
    i.innerHTML = ('Saída');
};

function resetWordsConnection(){
    for(let i = 1; i < 27; i++){
        (function(){
            let j = document.getElementById(NumberToWord(i)+'wordInput');
            j.readOnly = false;
            j.style.border = '2px solid black';
        }());
    };
};

function resetRotorSelection(){
    for(i=0;i<5;i++){
        let j = document.getElementsByClassName('divRotor')[i];
        j.style.backgroundColor = 'rgba(255, 0, 0, 0.74)'
    }
        
};