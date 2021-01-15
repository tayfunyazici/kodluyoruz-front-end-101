var form = document.getElementById("form");
var parola1 = document.getElementById("parola1");
var parola2 = document.getElementById("parola2");
var uyari = document.getElementById("uyari");

form.addEventListener("submit", function(e){
    e.preventDefault();

    if(parola1.value.length >= 8){
        
        if(parola1.value === parola2.value){
            uyari.innerHTML="Hoşgeldiniz " + kadi.value.toLowerCase();
        }
        else{
            uyari.innerHTML="Parolalar Eşleşmiyor.";
        }
    }
    else{
            uyari.innerHTML="Şifre En Az 8 Karakterden Oluşmalıdır.";
    }


})




var ad = document.getElementById("ad");
var soyad = document.getElementById("soyad");
var kadi = document.getElementById("kadi");
var kadi1,kadi2 ="";

ad.addEventListener("keyup", function(){

    kadi1=ad.value;
    kadi.value=("@"+kadi1+kadi2).toLowerCase();  

});

soyad.addEventListener("keyup", function(){

    kadi2=soyad.value;  
    kadi.value=("@"+kadi1+kadi2).toLowerCase();  

});