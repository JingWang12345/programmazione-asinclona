// console.log('async');

// setTimeout(togliaLasagna, 3000)

// function togliaLasagna(){
//     console.log('le lasagna sono pronte!!!');
// }

// setTimeout(buttaLaSpazzatura, 10000)

// function buttaLaSpazzatura(){
//     console.log('ho fatto la differenziata!!!');
// }

// setTimeout(salutaLaNonna, 5000)


// function salutaLaNonna() {
//     document.getElementById('main').innerHTML = '<h1>Ciao Nonna!!</h1>'
    
// }

// function salutaJing(){
//     console.log("ciao Jing!!!");
// }

// setInterval(salutaJing, 2000);


fetch('URL')
.then(resp => resp.json())
.then(data => console.log(data));