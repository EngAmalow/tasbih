let btnh = document.querySelector("#tasbih")
let btnincrease = document.querySelector("#Increase")
let btnrest = document.querySelector("#Rest")
let btnDecrease = document.querySelector("#Decrease")
let initialvalue = 0







btnincrease.addEventListener("click", function (){
initialvalue++
tasbih.innerHTML = initialvalue
 if (initialvalue == 4)
    document.body.style.backgroundColor = "red"


 else if (initialvalue == 5)
    document.body.style.backgroundColor = "blue"

 else if  (initialvalue == 6)
    document.body.style.backgroundColor = "green"
 else if (initialvalue == 7)
    document.body.style.backgroundColor = "orange"
 else if (initialvalue == 8)
    document.body.style.backgroundColor = "yellow"
 

 else  (
    document.body.style.backgroundColor = ""
 )

})

btnrest.addEventListener("click", function (){
initialvalue = 0

tasbih.innerHTML = initialvalue
btnrest.style.color = "yellow"

})
