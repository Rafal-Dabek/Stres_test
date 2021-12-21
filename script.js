function done2()
{
  var zadaniowe = 0;
  var okołoemocjonalne = 0;

  //okołoemocjonalne

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("1_"+i.toString()).checked == true)
    {
      okołoemocjonalne += parseInt(document.getElementById("1_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("2_"+i.toString()).checked == true)
    {
      okołoemocjonalne += parseInt(document.getElementById("2_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("3_"+i.toString()).checked == true)
    {
      okołoemocjonalne += parseInt(document.getElementById("3_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("5_"+i.toString()).checked == true)
    {
      okołoemocjonalne += parseInt(document.getElementById("5_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("6_"+i.toString()).checked == true)
    {
      okołoemocjonalne += parseInt(document.getElementById("6_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("9_"+i.toString()).checked == true)
    {
      okołoemocjonalne += parseInt(document.getElementById("9_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("11_"+i.toString()).checked == true)
    {
      okołoemocjonalne += parseInt(document.getElementById("11_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("12_"+i.toString()).checked == true)
    {
      okołoemocjonalne += parseInt(document.getElementById("12_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("15_"+i.toString()).checked == true)
    {
      okołoemocjonalne += parseInt(document.getElementById("15_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("19_"+i.toString()).checked == true)
    {
      okołoemocjonalne += parseInt(document.getElementById("19_"+i.toString()).value)
    }
  }

  //zadaniowe

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("4_"+i.toString()).checked == true)
    {
      zadaniowe += parseInt(document.getElementById("4_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("7_"+i.toString()).checked == true)
    {
      zadaniowe += parseInt(document.getElementById("7_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("8_"+i.toString()).checked == true)
    {
      zadaniowe += parseInt(document.getElementById("8_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("10_"+i.toString()).checked == true)
    {
      zadaniowe += parseInt(document.getElementById("10_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("13_"+i.toString()).checked == true)
    {
      zadaniowe += parseInt(document.getElementById("13_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("14_"+i.toString()).checked == true)
    {
      zadaniowe += parseInt(document.getElementById("14_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("16_"+i.toString()).checked == true)
    {
      zadaniowe += parseInt(document.getElementById("16_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("17_"+i.toString()).checked == true)
    {
      zadaniowe += parseInt(document.getElementById("17_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("18_"+i.toString()).checked == true)
    {
      zadaniowe += parseInt(document.getElementById("18_"+i.toString()).value)
    }
  }

  for(var i=1; i<6; i++)
  {
    if(document.getElementById("20_"+i.toString()).checked == true)
    {
      zadaniowe += parseInt(document.getElementById("20_"+i.toString()).value)
    }
  }


  var ele = document.getElementsByTagName('input');
                
  var ele = document.getElementsByTagName('input');
  var d=[];
  for(i = 0; i < ele.length; i++)
  {
    if(ele[i].type="radio") {
                      
      if(ele[i].checked)
      {

        if(ele[i].value!=null)d+= ele[i].value ;
                        
      }
                          

    }
              
  }


  var p=Array.from(d);

  if((d.length)!=20)
  {

      alert("Nie wszytkie odpowiedzi są zaznaczone!")
            
  }
  else
  {
    if(!isNaN(document.getElementById("disp").innerHTML))
    {
        document.getElementById("disp").innerHTML += "Wynik okołoemocjonalny: " + okołoemocjonalne + "<br>" +
        "Wynik zadaniowy: " + zadaniowe + "<br>";

        //document.getElementById("results").style.display = "block";
        
    }

    

    
    


  }

}



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

  //if (document.getElementById("results").style.display == "none")
       // document.getElementById("results").style.display = "block";

       //document.getElementById("results").innerHTML.s
  
}



}


