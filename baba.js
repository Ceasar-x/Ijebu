let space = document.getElementById('inputter')
let core = document.getElementById('cor')
let remake = document.getElementById('remark')
let rejoice = document.getElementById('gif')
let solution = Math.trunc(Math.random() * 20);

core.innerHTML = solution

function check() {
    core.style.backgroundColor = "#2e2d2d"

    if (space.value == core.innerHTML) {
        remake.innerHTML = 'Congratulations🎉, you guessed correctly😀'
        remake.style.color = "greenyellow"
        rejoice.style.display = "block"
    }
    else{
        remake.innerHTML = "Nice Shot, but try again😐"
        remake.style.color = "red"
    }
}