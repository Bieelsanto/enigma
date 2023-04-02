function WordToNumber(word){

    return word.charCodeAt(0)-96
}

function NumberToWord(number){

    return String.fromCharCode(number+64).toLowerCase()
}

const rotor1 = {
    a: 10,
    b: 20,
    c: 5,
    d: 17,
    e: 12,
    f: 21,
    g: 9,
    h: 4,
    i: 15,
    j: 22,
    k: 6,
    l: 11,
    m: 8,
    n: 18,
    o: 25,
    p: 2,
    q: 19,
    r: 16,
    s: 3,
    t: 7,
    u: 24,
    v: 14,
    w: 26,
    x: 23,
    y: 13,
    z: 1
}

const rotor2 = {
    a: 26,
    b: 6,
    c: 23,
    d: 24,
    e: 17,
    f: 11,
    g: 8,
    h: 12,
    i: 5,
    j: 15,
    k: 20,
    l: 3,
    m: 19,
    n: 1,
    o: 21,
    p: 9,
    q: 10,
    r: 14,
    s: 2,
    t: 18,
    u: 7,
    v: 25,
    w: 22,
    x: 13,
    y: 16,
    z: 4
}

const rotor3 = {
    a: 19,
    b: 12,
    c: 7,
    d: 20,
    e: 2,
    f: 8,
    g: 16,
    h: 26,
    i: 13,
    j: 11,
    k: 23,
    l: 18,
    m: 4,
    n: 21,
    o: 10,
    p: 3,
    q: 24,
    r: 15,
    s: 5,
    t: 22,
    u: 9,
    v: 14,
    w: 1,
    x: 17,
    y: 6,
    z: 25
}

function wordInput(){
    let input = document.getElementById('userWordInput')
    input.value = ''
    var result = rotor1.filter(obj => {
        return obj.b === 6
    })
    console.log(result)
}