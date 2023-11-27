// window.alert('sdfsdfsdf');
let contador = 1

const saludar = ()=>{
    document.write('<p>Hola mundo 😎</p>');
    const fecha = new Date();
    document.write(`Mes: ${fecha.getMonth()} - `);
    document.write(`Hora: ${fecha.getHours()} :${fecha.getMinutes()}: ${fecha.getSeconds() }`);
    console.log(fecha);
    if(contador === 5){
        clearInterval(idInterval);
    }
    contador++
}

// saludar();

// setTimeout
// window.setTimeout( saludar, 5000);
// setTimeout( ()=>{
//     document.write('<p>Hola mundo  nuevo 😶</p>')
// }, 6000);

// setInterval
const idInterval = setInterval(saludar, 2000);
console.log(idInterval)