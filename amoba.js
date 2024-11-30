const x=4;
const y=4;

function $(osztaly){
    return document.getElementsByClassName(osztaly)
}

function meretez(){
    console.log("Méretezünk")
    let ablakMagassag= Number(window.innerHeight)
    let dobozNagysag = (ablakMagassag-100)/x
   
    let palya =$("palya")[0]
    console.log("Pálya:", palya)
    palya.style.width=y*dobozNagysag+"px"

    let dobozok= $("box")
    console.log("box", dobozok)
    for (const doboz of dobozok) {
        doboz.style.height=dobozNagysag+"px"
        doboz.style.width=dobozNagysag+"px"
    }
   
}

function init(){
    document.body.innerHTML=""
   
    // console.log("aa",ablakMagassag)
   

    let palya= document.createElement('div')
   
    palya.className="palya"
    console.log("Body append")
    document.body.appendChild(palya)
    
    for (let i = 0; i < x; i++) {
        let sor= document.createElement('div')
        sor.className="sor"
        palya.appendChild(sor)

        for (let j = 0; j < y; j++) {
            let doboz = document.createElement('div')
           
            doboz.className="box"
            sor.appendChild(doboz)
            
        }
    }
    console.log("Most")
    meretez()
}

init(4,4)
window.onresize=meretez


// let doboz= document.createElement('div')
// doboz.className="box"
// document.body.appendChild(doboz)