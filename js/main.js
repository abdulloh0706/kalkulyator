var form = document.querySelector('.form')
var form1 = document.querySelector('.form1')
var form2 = document.querySelector('.form2')
var form3 = document.querySelector('.form3')
var form4 = document.querySelector('.form4')
var form5 = document.querySelector('.form5')
var inp1 = document.querySelector('.form1__inp1')
var inp2 = document.querySelector('.form1__inp2')

var form2t1 = document.querySelector('.form2__title1')
var form2t2 = document.querySelector('.form2__title2')

var form3t1 = document.querySelector('.form3__title1')
var form3t2 = document.querySelector('.form3__title2')

var form4t1 = document.querySelector('.form4__title1')
var form4t2 = document.querySelector('.form4__title2')

var form5t1 = document.querySelector('.form5__title1')
var form5t2 = document.querySelector('.form5__title2')


form.addEventListener('submit', function(evnt){
    evnt.preventDefault()
    form2t1.textContent = inp1.value + ' ni'
    form2t2.textContent = inp2.value + ' ga'

    form3t1.textContent = inp1.value + ' ni'
    form3t2.textContent = inp2.value + ' ga'

    form4t1.textContent = inp1.value + ' ni'
    form4t2.textContent = inp2.value + ' ga'

    form5t1.textContent = inp1.value + ' ni'
    form5t2.textContent = inp2.value + ' ga'

    if(inp2.value == ''){
        form2t2.textContent = 'Nimaga hisoblemiz?'
        form3t2.textContent = 'Nimaga hisoblemiz?'
        form4t2.textContent = 'Nimaga hisoblemiz?'
        form5t2.textContent = 'Nimaga hisoblemiz?'
    }
    else if(inp1.value == ''){
        form2t1.textContent = 0 + ' ni'
        form3t1.textContent = 0 + ' ni'
        form4t1.textContent = 0 + ' ni'
        form5t1.textContent = 0 + ' ni'
    }
})

form2.addEventListener('submit', function(evnt2){
    evnt2.preventDefault()
    form2t2.textContent = 'Javob ' + inp1.value * inp2.value
    form2t1.textContent = inp1.value + ' * ' + inp2.value

    inp1.value.textContent = ''
    inp2.value.textContent = ''
})
form3.addEventListener('submit', function(evnt3){
    evnt3.preventDefault()
    form3t2.textContent = 'Javob ' + inp1.value / inp2.value
    form3t1.textContent = inp1.value + ' : ' + inp2.value
})
form4.addEventListener('submit', function(evnt4){
    evnt4.preventDefault()
    var natija = parseInt(inp1.value) + parseInt(inp2.value)
    form4t1.textContent = inp1.value + ' + ' + inp2.value
    form4t2.textContent = 'Javob ' + natija
})
form5.addEventListener('submit', function(evnt5){
    evnt5.preventDefault()
    var natijaa = inp1.value - inp2.value
    form5t1.textContent = inp1.value + ' - ' + inp2.value
    form5t2.textContent = 'Javob ' + natijaa
})
