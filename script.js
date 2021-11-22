



function done(){
  var achivement=0;
  var control=0;
  var membership=0;
  var ele = document.getElementsByTagName('input');
    

       


        document.getElementById("disp").innerHTML = "";
        var ele = document.getElementsByTagName('input');
        var d=[];
        for(i = 0; i < ele.length; i++) {
            if(ele[i].type="radio") {
              
                if(ele[i].checked)
                {

                  if(ele[i].value!=null)d+= ele[i].value ;
                  
                }
                    

            }
        


          }


  var p=Array.from(d);
 for (i=0;i<15;i+=3)
 {

achivement+=parseInt(p[i]);
control+=parseInt(p[i+1]);
membership+=parseInt(p[i+2]);
 }
  



if(achivement==0 &&control==0 && membership==0||(  isNaN(achivement) || isNaN(control)|| isNaN(membership)) )
{
  alert ("Wszystkie pola muszą być uzupełnione!");
}
else
{
  document.getElementById("disp").innerHTML
  +=  " Osiągnięcia: "
  + achivement + "<br>"
  
    + " Władza: "
  + control + "<br>"
  
   + " Przynależnośc: "
  + membership + "<br>";
}



}


