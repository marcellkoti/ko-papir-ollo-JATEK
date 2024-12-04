var image = document.getElementById("jatekosvalasztasa");
var user = "";
function ko(){
image.src = "pic/ko.png";
user="ko";
}

function papir(){
    image.src = "pic/papir.png";
    user="papir";
}

    function ollo(){
        image.src = "pic/ollo.png";
       user="ollo";
    }
        var pcimage = document.getElementById("pckep");
function jatek(min,max){
    const lehetoseg = ["ko","papir","ollo"];
    
         
   var x =  Math.floor(Math.random() * (max - min + 1) ) + min;   
   var pc = lehetoseg[x]
   var y = "pic/"+pc+".png"
   
   pcimage.src =  y;
   var eredmeny = "";



   if(user == pc){
    document.getElementById("teszt").innerHTML="dontetlen";
   }
else{


    if(user == "ko" && pc == "papir"){
    eredmeny = "PC nyert";
    }
    if(user == "ko" && pc == "ollo"){
        eredmeny = "USER nyert";
        }

    if(user == "papir" && pc == "ollo"){
            eredmeny = "PC nyert";
            }

    if(user == "papir" && pc == "ko"){
                eredmeny = "PC nyert";
                }


    if(user == "ollo" && pc == "ko"){
                eredmeny = "PC nyert";
                }

    if(user == "ollo" && pc == "papir"){
                    eredmeny = "USER nyert";
                    }

                    document.getElementById("teszt").innerHTML=eredmeny;

if(eredmeny == "USER nyert"){
    document.getElementById("pckep").style.opacity=0.3;

}
else{
    document.getElementById("jatekosvalsztas").style.opacity=0.3;
}




}

document.getElementById("jatekgomb").disabled = true;
document.getElementById("jatekgomb").style.backgroundColor ="grey" ;
setTimeout (function() {location.reload(); }, 5000  );


}















