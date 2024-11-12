function call()
{
    var x=parseFloat(hn.value)
    var y=parseFloat(en.value)
    var z=parseFloat(mn.value)
    
    var q=''
  var p=''
  var r=''
 var count=0
 var Hc=''
  if(x>=75)
  {
    p='D'
  }
  else if(x<=35)
  {
       p='*'
       count++
       Hc="Hindi"
  }
  var Ec=''
  if(y>=75)
  {
    q='D'
  }
  else if(y<=35)
  {
       q='*'
       count++
       Ec="English"
  }
  
var Ma=''
  if(z>=75)
  {
       r='D'
  }
  else if(z<=35)
  {
       r='*'
       count++
       Ma="Math"
  }
 

    


    var t=x+y+z
    var per=(t/300)*100
    var grd=''
    if(per>=0 && per<=40)
    {
     grd='C'
    }
    else if(per>=41 && per<=60)
    {
     grd='B'
    }
    else if(per>=61 && per<=100)
    {
     grd='A'
    }



    if(male.checked)
    {
     var sn1='Mr.'
     var sn2='S/O'
    }
    else if(female.checked)
    {
     var sn1='Miss.'
     var sn2='D/O'
    }


      var ch=""
      if(count>=1 && count<=2)
      {
        ch="compartment"
      }
      else if(count>2)
      {
        ch="Fail"
      }
      else
      { 
        ch="Pass"
      }
    /*if((x<=35 && y<=35 && z<=35) || per<30)
    {
      var ch='Fail'
    }
    else
    {
       ch='Pass'
    }*/

    var htm=`<table border='1' cellspacing='0' width=40%>`
    htm+=`<caption><th><img src='cbselogo.png' width='25%' height='25%'/></th><th><b><font face='monoty corsiva' size=6 color=red>
          'The Central Board of Secondary Education'</font></b></th></caption>`
    htm+=`</table><br>`

    htm+=`<table border='1' cellspacing='0' width=40%>`
    htm+=`<tr><th>Roll Number: ${rln.value}</th></tr>`
    htm+=`<tr><th>Father name:${fn.value}</th></tr>`
    htm+=`<tr><th>${sn1}:${stn.value}</th><th>${sn2}:${fn.value}</th></tr>`
    htm+=`<tr><th>D.O.B.: ${dob.value}</th></tr>`
    htm+=`</table><br>`

   htm+=`<table border='1' width='40%' cellspacing='0'>`
   htm+=`<tr><th>Subject code</th><th>Name</th><th>Max marks</th>
   <th>Obtained marks</th><th>Remark</th></tr>`
   htm+=`<tr><th>${hc.value}</th><th>Hindi</th><th>100</th>
   <th>${x}</th><th>${p}</th></tr>`
   htm+=`<tr><th>${ec.value}</th><th>English</th><th>100</th>
   <th>${y}</th><th>${q}</th></tr>`
   htm+=`<tr><th>${mc.value}</th><th>Math</th><th>100</th>
   <th>${z}</th><th>${r}</th></tr>`
   htm+=`<tr><th></th><th>${ch}<br>${Hc},${Ec},${Ma}</th><th>Total: 300</th>
   <th>${t}</th><th>Percentage: ${per.toFixed(2)}%<br>Grade: ${grd}</th></tr>`
   htm+=`</table>`

    result.innerHTML=htm

}