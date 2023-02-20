let btn=document.querySelector('.function-calc')
let block =document.getElementById('one')
btn.onclick = () => {
    let a = +prompt('введите первое число')
    let b = +prompt('введите второе число')
    let c = prompt('введите + - * /')
    if(c == '+'){
        block.innerHTML=(a + b)
    }
    if(c == '-') {
        block.innerHTML=(a - b)
    }
    if(c == '*'){
        block.innerHTML=(a * b)
    }
    if(c == '/') {
        block.innerHTML=(a / b)
    }

}

let btn=document.querySelector('.function-one')
let block =document.getElementById('one')
btn.onclick = () => {
    let a = 5
    block.innerHTML= ('цифра ' + a)
}


