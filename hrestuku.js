const zmina = document.getElementById('corobb');

let hid = 0;
let result = '';

const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('viknorez');
const overlay = document.getElementById('overlay');
const knopka = document.getElementById('knopka');

zmina.addEventListener('click' , e => {
    if(e.target.className = 'klit') {
        hid % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O' ;
        hid++;
        check();

    }
})

const check = () => {
    const box = document.getElementsByClassName('klit');
    const vin =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ];
    for(i = 0; i < vin.length; i++){
        if (
            box[vin[i][0]].innerHTML =='O' &&  box[vin[i][1]].innerHTML =='O' &&  box[vin[i][2]].innerHTML =='O'
        ) {
            result = 'ноліки';
            rezyltat(result);
        } else if (
            box[vin[i][0]].innerHTML =='X' &&  box[vin[i][1]].innerHTML =='X' &&  box[vin[i][2]].innerHTML =='X'
        ){
            result = 'хрестики';
            rezyltat(result);
        } else if ( hid > 8 ){
            ressult = 'нічя';
            rezylltat(ressult);
        } 
        
    }

}
const rezyltat = winner => {
    contentWrapper.innerHTML = 'Виграли ' + ( winner ) + '!';
    modalResult.style.display = 'block';
}
const closeMolal = () =>{
    modalResult.style.display = 'none';
    location.reload();
}

overlay.addEventListener('click', closeMolal);
knopka.addEventListener('click', closeMolal);

const rezylltat = winner => {
    contentWrapper.innerHTML = ( winner ) + '!';
    modalResult.style.display = 'block';
}
