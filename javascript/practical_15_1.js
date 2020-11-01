let increment= document.getElementById('increment');
let decrement = document.getElementById('decrement');

let int = document.getElementById('number');
let integer = 0;

increment.addEventListener('click', function () {
    integer += 1;
    int.innerHTML = integer;
});

decrement.addEventListener('click', function () {
    integer -= 1;
    int.innerHTML = integer;
});
