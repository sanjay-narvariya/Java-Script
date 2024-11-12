function call()
{
    var carbrand=cars.options[cars.selectedIndex].text
    var price=parseInt(cars.value)

    var ins=price*10/100

    var rto=price*28/100
    var orp=price+ins+rto

    var htm=`<table border=1 cellspacing=0 width=30%>`
    htm+=`<caption><h3>Car Invoice</h3></caption>`
    htm+=`<tr><th><img src='logo.png' width=200/></th></tr>`
    htm+=`<tr><th><h3>${carbrand}</h3></th></tr>`
    htm+=`<tr><th><img src='${carbrand}.png' width=200 height=150/></th></tr>`
    htm+=`</table>`
    htm+=`<table border=1 cellspacing=0 width=30%>`
    htm+=`<tr><th>Base Price:</th><th>&#8377; ${cars.value}</th></tr>`
    htm+=`<tr><th>Insurance:</th><th>&#8377; ${ins}</th></tr>`
    htm+=`<tr><th>RTO:</th><th>&#8377; ${rto}</th></tr>`
    htm+=`<tr><th>On Road Price:</th><th>&#8377; ${orp}</th></tr>`
    htm+=`</table>`

    result.innerHTML=htm
}  