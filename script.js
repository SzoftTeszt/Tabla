//     // alert("hello");
//     // alert("Szia!");
//     document.getElementsByTagName('h1')[0].style.color="red"
//     document.body.style.background='green'

//     let dobozok = document.getElementsByClassName('box')
//     console.log("dobozok",dobozok)

// for (let i = 0; i < dobozok.length; i++) {dobozok[i].innerHTML="Alma"}

// dobozok[2].classList.remove('box')    

// console.log("dobozok újra",dobozok)
// for (let i = 0; i < dobozok.length; i++) {dobozok[i].innerHTML="Cica"}



// let dobozok2 = document.querySelectorAll('.box')
// console.log("-------------------")
// console.log("dobozok2",dobozok2)
// for (let i = 0; i < dobozok2.length; i++) {dobozok2[i].innerHTML="Nyuszika"}
// dobozok[2].classList.remove('box')   
// console.log("dobozok2 újra",dobozok2)
// console.log("dobozok újra",dobozok)
// for (let i = 0; i < dobozok2.length; i++) {dobozok2[i].innerHTML="Kutyus"}

function $(osztaly){
    return document.getElementsByClassName(osztaly)
}

document.body.innerText="<button>alma</button>"
document.body.innerHTML+="<button>alma</button>"

document.body.innerHTML+='<div class="box">1</div>'

let doboz= document.createElement('div')
doboz.className="box"
doboz.innerHTML="2"
// doboz.classList.add("box")
document.body.appendChild(doboz)

let dobozok = $("nyuszi",2,"alma")
for (let i = 0; i < dobozok.length; i++) {
    dobozok[i].style.background="red"
    
}