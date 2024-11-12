function call()

{
    var x=parseInt(hn.value)
    var y=parseInt(en.value)
    var z=parseInt(mn.value)
  var q=''
  var p=''
  var r=''
  if(x>=75)
  {
    p='D'
  }
  else if(x<=35)
  {
       p='*'
  }
  
  if(y>=75)
  {
    q='D'
  }
  else if(y<=35)
  {
       q='*'
  }
  

  if(z>=75)
  {
       r='D'
  }
  else if(z<=35)
  {
       r='*'
  }
  /* var p=[x,y,z]
   for(i=0;i<p.length;i++)
   {

     if(p[i]>=75)
     {
          h='D'
     }
     else if(p[i]<=35)
     {
          h='*'
     }
     
   }*/
   

    
    if(x<=35 && y<=35 && z<=35)
         {
           var ch='Fail'
         }
         else
         {
            ch='Pass'
         }
    var t=x+y+z
    var per=t*100/300
    
    if(gn.checked)
    {  
        alert(gn.value)
        var sp='Mr'
        var fp='S/o'
    }
    else
    {
        sp='Miss'
       fp='D/o'
    }
    var htm=`<table border='1' width='50%' cellspacing='1'>`
    htm+=`<caption><th><img src='cbselogo.png' width='25%' height='25%'/></th>
        <th><b><font color='red' size='6' face='monoty corsiva'>
        'The Central Board of Secondary Education'</font></b></th></caption>`
    htm+=`</table><br><br>`
    htm+=`<table border='1' width='50%' cellspacing='1'>`
    htm+=`<tr><th>Roll number:${rn.value}</th></tr>`
    htm+=`<tr><th>Father name:${fn.value}</th></tr>`
    htm+=`<tr><th>${sp}:${stn.value}</th><th>${fp}:${fn.value}</th></tr>`
    htm+=`<tr><th>D.O.B.:${dob.value}</th></tr>`
    htm+=`</table><br><br>`

    htm+=`<table border='1' width='50%' cellspacing='1'>`
    htm+=`<tr><th>Subject code</th><th>Name</th><th>Min marks</th><th>Max marks</th>
         <th>Obtained marks</th><th>Remark</th></tr>`
    htm+=`<tr><th>${hc.value}</th><th>Hindi:</th><th>35</th><th>100</th>
         <th>${hn.value}</th><th>${p}</th></tr>`
    htm+=`<tr><th>${ec.value}</th><th>English:</th><th>35</th><th>100</th>
         <th>${en.value}</th><th>${q}</th></tr>`
    htm+=`<tr><th>${mc.value}</th><th>Math:</th><th>35</th><th>100</th>
         <th>${mn.value}</th><th>${r}</th></tr>`
    htm+=`<tr><th></th><th>${ch}</th><th></th><th>Total:=300</th>
         <th>${t}</th><th>${per}%</th></tr>`
    htm+=`</table>`

    cbse.innerHTML=htm
}

