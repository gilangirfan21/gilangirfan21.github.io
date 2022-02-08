function getpilihanComputer(){
    const com = Math.random();

    if (com <= 0.33)  return "rock";
    if (com > 0.33 && com < 0.66 ) return  "scissors";
    else return "paper";
}


function getHasil(com, player){
    
    if (player == com) return "DRAW";
    if (player == "rock") return  (com == "scissors") ? "WIN" : "LOSE";
    if (player == "scissors") return (com == "paper") ? "WIN" : "LOSE";     
    if (player == "paper") return (com == "rock") ? "WIN" : "LOSE";  
    else return "SALAH MEMILIH";
}


function putar(){
    const imgCom = document.querySelector(".img-komputer");
    const gambar = ["rock","scissors","paper"];

    let i = 0;

    const waktuMulai = new Date().getTime();
    setInterval(function(){
        
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }

        imgCom.setAttribute("src","img/"+ gambar[i++]+".png");
        
        if(i == gambar.length){
            i=0;
        }

    }, 100)
}


const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function(pil){
    pil.addEventListener("click",function(){
            const pilihanComputer = getpilihanComputer();
            const pilihanPlayer = pil.className;

            const hasil = getHasil(pilihanComputer,pilihanPlayer );
        
            putar();

            setTimeout(function(){
                const gambarCom = document.querySelector(".img-komputer");
                gambarCom.setAttribute("src","img/"+ pilihanComputer +".png");
                
                const info = document.querySelector(".info");
                info.innerHTML= hasil;         
            }, 1000);

            
    })
    
});

