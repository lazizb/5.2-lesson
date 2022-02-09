// function misol() {
//     console.log('salom');
// }
// misol()
                
// function misol(text) {
//     returntex;
// }
// let result = misol();
// console.log(result);

// function misol(text) {
//     return text;
// }
// console.log(misol(undefined)); // lorem => argment 

// function calc(x = 4, y = 6) {
//     console.log(x + y);
// }
// calc(45, 45);

// function calc(x = 4, y = 6) {
//     console.log(x + y);
// }
// calc(5, 78);
// calc(3, 48);
// calc(5, 7);
// calc(45, 45);
// calc(45, 45);
// calc(45, 45);
// calc(45, 45);

// let num = 1;
// function misol() {
//     let num = 5;
//     console.log(num);
// }
// misol()

// let num = 1;

// function boshqa() {
//     let num = 10; 
//     function misol() {
//         console.log(num);
//     }
//     misol()
// }
// boshqa()
// let ism = prompt('ismingizni kiriting');
// let yoshi = prompt('yoshingizni kiriting');
// let kasbi = prompt('kasbingizni kiriting kiriting');
// let jins = prompt('jinsinigizni kiriting');
// let malumot = prompt('malumotingizni kiritng kiriting');



// function rezume(ism = 'kimbu', yoshi='yoshi kirit', kasbi= 'jinni', jins='nomalum', malumot='hch nma', ) {
//     console.log(`Ism: ${ism}; \nyosh ${yoshi}; \nKasb ${kasbi}; \njinsi ${jins}; \nMalumot ${malumot};`);
// }


// rezume(ism, yoshi, kasbi, jins, malumot);





let sonFirst = +prompt('birinchi sonni kiriting')
let sonSecond = +prompt('Ikkkinchi sonni kiriting')


function defineNum(x, y) {
    let result;
    if (x > y){
        result = (`${sonFirst} > ${sonSecond}`);
    }else{
        result = (`${sonSecond} > ${sonFirst}`);
        
    }
    return result; 
}
console.log(defineNum(sonFirst, sonSecond));

