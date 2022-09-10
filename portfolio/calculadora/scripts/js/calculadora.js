let display = document.getElementById('display')

function insert(tecla) {
  display.value = display.value + tecla
}

function limpar() {
  display.value = ''
}

function calculate() {
  display.value = eval(display.value)
}
