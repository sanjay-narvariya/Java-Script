function call()
{
    var brand=pizza.options[pizza.selectedIndex].text
    var ch=cheez.options[cheez.selectedIndex].text
    var p1=parseFloat(pizza.value)
    var p2=parseFloat(cheez.value)
    var b=''
    var a=''
      if(pizza.selectedIndex==2)
      {
        b=`<tr><th>Indian Thali Price:</th><td>&#8377; ${p1}</td></tr>`
        a=`<tr><th>No Price:</th><td>&#8377; 0</td></tr>`
      }
      else
      {
        b=`<tr><th>Pizza Price:</th><td>&#8377; ${p1}</td></tr>`
        a=`<tr><th>${ch} Price:</th><td>&#8377; ${p2}</td></tr>`
        
      }

    var p=p1+p2
    var gst=p*5/100
    var t=p+gst

    var htm=`<table border=1 cellspacing=0 width=30%>`
    htm+=`<caption><h3>Pizza Invoice</h3></caption>`
    htm+=`<tr><th><img src='pizza logo.png' width=200/></th></tr>`
    htm+=`<tr><th><img src='${brand}.png' width=200 height=150/></th></tr>`
    htm+=`</table>`
    htm+=`<table border=1 cellspacing=0 width=30%>`
    htm+=b
    htm+=a
    htm+=`<tr><th>GST:</th><td>&#8377; ${gst}</td></tr>`
    htm+=`<tr><th>Total Price:</th><td>&#8377; ${t}</td></tr>`
    htm+=`</table>`

    msg.innerHTML=htm

}