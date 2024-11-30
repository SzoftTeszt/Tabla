const stage={
    x:4,
    y:4,
    jel:true,
    tomb: [[],[],[],[]]
}


function $(osztaly){
    return document.getElementsByClassName(osztaly)
}
function ellenorzes(x,y, jel){
    // Ezt be kellene fejezni!!!
    let db=0

    for (let i = y; i < stage.y; i++) if (stage.tomb[x][i]==jel) db++;     
    for (let i = y-1; i >=0; i--) if (stage.tomb[x][i]==jel) db++;

    console.log("Összesen(",jel,"):", db)    
    if (db<3){       
        db=0
        for (let i = x; i < stage.x; i++) if (stage.tomb[i][y]==jel) db++;
        for (let i = x-1; i >=0; i--) if (stage.tomb[i][y]==jel) db++;
    }
    console.log("Függőleges Összesen(",jel,"):", db)  

    if (db<3){  
        db=0
        for (let i = 0; i < 4; i++){
            if ((stage.tomb[x+i]) && (stage.tomb[x+i][y+i]) && (stage.tomb[x+i][y+i]==jel)) db++;
        }
        console.log("Átlósan",jel,"):", db)  

    }



}

function dobozKatt(){
    console.log("Katt")
   
    
    if (!this.innerHTML){
        this.innerHTML=stage.jel?"X":"O"
        stage.tomb[Number(this.dataset.sor)][Number(this.dataset.oszlop)]=stage.jel?"X":"O"
        console.log(stage.tomb)
        ellenorzes(Number(this.dataset.sor),Number(this.dataset.oszlop),stage.jel?"X":"O")
        stage.jel = !stage.jel
    }
}

function meretez(){
    // console.log("Méretezünk")
    let ablakMagassag= Number(window.innerHeight)
    let dobozNagysag = (ablakMagassag-100)/stage.x
   
    let palya =$("palya")[0]
    // console.log("Pálya:", palya)
    palya.style.width=stage.y*dobozNagysag+"px"
    palya.style.fontSize=dobozNagysag+"px"
    let dobozok= $("box")
    // console.log("box", dobozok)
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
    
    for (let i = 0; i < stage.x; i++) {
        let sor= document.createElement('div')
        sor.className="sor"
        palya.appendChild(sor)

        for (let j = 0; j < stage.y; j++) {
            let doboz = document.createElement('div')
           
            doboz.className="box"
            doboz.onclick=dobozKatt
            doboz.dataset.sor=i
            doboz.dataset.oszlop=j
            
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