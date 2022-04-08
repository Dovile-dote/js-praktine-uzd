console.log('-----1-----');
// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
let a = 2;
let b = 4;
if (a > b) {
    console.log('a didesnis uz b');
} else if (b > a) {
    console.log('b didesnis uz a');
} else {
    console.log('skaiciai yra lygus');
}

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

console.log('-----2-----');
let skaicius = 0;
for (let i = 0; i < 10; i++) {
    skaicius++;
    console.log(skaicius);
}

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
console.log('-----3-----');
let kasDu = 0;
for (let i = 0; i < 6; i ++) {
    console.log(kasDu);
    kasDu += 2; 
}

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
console.log('-----4-----');
let random = 0;
for (let i = 0; i < 5; i++) {
    random = 1 + Math.floor(Math.random() * 10);
    console.log(random);
}

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
console.log('-----5-----');
let randomNumber = 0;
while (!(randomNumber === 5)) {
    randomNumber = 1 + Math.floor(Math.random() * 10);
    console.log(randomNumber);
}
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
console.log('-----6-----');
const masyvasLength = 20 + Math.floor(Math.random() * 11);
const masyvas = [];

for (let i = 0; i < masyvasLength; i++) {
    masyvas[i] = 10 + Math.floor(Math.random() * 21)
}
console.log(masyvas);
console.log(masyvas.length);
let didziausias = masyvas[0];
for (let i = 0; i < masyvas.length; i++) {
    
    if (masyvas[i] > didziausias) {
        didziausias = masyvas[i];
    }
   
} console.log(`Didziausias skaicius:`, didziausias);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
console.log('-----7-----');
const raides = 'ABCD';
const raidziuMasyvas = [];
for (let i = 0; i < 100; i++) {
    let raide = raides[Math.floor(Math.random() * 4)];
    raidziuMasyvas[i] = raide;
}
console.log(raidziuMasyvas);
console.log(raidziuMasyvas.length);

let sumaA = 0;
let sumaB = 0;
let sumaC = 0;
let sumaD = 0;

for (let i = 0; i < raidziuMasyvas.length; i++) {
        if (raidziuMasyvas[i] === 'A') {
        sumaA = sumaA + 1;
    } else if (raidziuMasyvas[i] === 'B') {
        sumaB++;
    } else if (raidziuMasyvas[i] === 'C') {
        sumaC++;
    } else {
        sumaD++;
    }
}
console.log(`Siame masyve yra ${sumaA} A, ${sumaB} B, ${sumaC} C ir ${sumaD} D raides/ziu.`);
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
a = 3;
b = 7;

function lygineSuma(a, b) {
    if (typeof a ==='number' && typeof b === 'number') {
    let suma = a + b;
    
    if (suma % 2 !== 0 ) {
        return `${a} + ${b} = ${suma} suma nera lygine`
    }
     return `${a} + ${b} = ${suma};`
    } else if (Array.isArray(a) === true && Array.isArray(b)) {
    let suma = a.length + b.length;
    if (suma % 2 !== 0 ) {
        return `${a} ir ${b} masyvu ilgiu suma yra ${suma} suma nera lygine`
    }
    return `${a} ir ${b} masyvu ilgiu suma yra ${suma}`
    }
}
console.log(lygineSuma(4, 6));
console.log(lygineSuma(9, 0));
console.log(lygineSuma([2, 3, 4, 4], [7, 4, 6]));
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
console.log('-----9-----');

function pirminisSkaicius(x) {
    if (typeof x !== 'number'
    || !isFinite(x)) {
    return 'ERROR: netinkamas tipas';
    } 
    let kiekDalinasi = 0;
    for (let i = 0; i < x; i++) {
        if (x % i === 0) {
            kiekDalinasi = kiekDalinasi +1;
        }
    } 
    if (kiekDalinasi > 2) {
        return 'skaicius nera pirminis'; 
        } else {
        return 'skaicius yra pirminis'
        }
}
console.log(pirminisSkaicius(10));
console.log(pirminisSkaicius(3));
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)
console.log('-----10-----');
function telefonoNumeris(skaiciai) {
    if (Array.isArray(skaiciai) === true) {
        if (skaiciai.length === 10) {
            return `(${skaiciai[0]} ${skaiciai[1]} ${skaiciai[2]}) ${skaiciai[3]} ${skaiciai[4]} ${skaiciai[5]} - ${skaiciai[6]} ${skaiciai[7]} ${skaiciai[8]} ${skaiciai[9]}`;
        } else if (skaiciai.length < 10) {
            return `truksta skaiciu`;
        } else {
            return `skaiciu per daug`;
        }
    } else {
        return `netinkami duomenys`;
    }
}
x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
patikrinimas = telefonoNumeris(x);
console.log(patikrinimas);