var ad = "Tayfun" ;
var resitYas = 18;
var evleneceginYas = parseInt(prompt("Evlendiğiniz Yaşı Giriniz :"));
var a;

for(a=0; a<=35; a++)
{
    if(a===18)
    {
        console.log(ad + " Reşit Oldun");
    }
    

    else if(a===evleneceginYas)
    {
        console.log(ad+ " " + evleneceginYas + " Yaşında Evlendin");
    }
    
     else if(a===35)
    {
        console.log(ad + " " + a + " Yaşındasın");
    }
    
    else
    {
        console.log(ad + " " + a + " Yaşındasın ");
    }
    
}