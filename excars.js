function call()
{
    var carbrand=cars.options[cars.selectedIndex].text
    var p=parseInt(cars.value)
    var ins=p*10/100
    var rto=p*28/100
    var orp=p+ins+rto

    var A="<table border=1 cellspacing=0 width='30%'>"
    A+="<caption><h3>Car Invoice</h3></caption>"
    A+="<tr><th><img src='logo.png' width=50 height=100/></th></tr>"
    A+="<tr><th><h3>"+carbrand+"</h3></th></tr>"
    A+="<tr><th><img src='"+carbrand+".png' width=150 height=150/></th></tr>"
    A+="</table>"
    A+="<table border=1 cellspacing=0 width='30%'>"
    A+="<tr><th>Base Price:</th><th>&#8377;"+cars.value+"</th></tr>"
    A+="<tr><th>Insurance:</th><th>&#8377;"+ins+"</th></tr>"
    A+="<tr><th>RTO:</th><th>&#8377;"+rto+"</th></tr>"
    A+="<tr><th>On Road Price:</th><th>&#8377;"+orp+"</th></tr>"
    A+="</table>"

    result.innerHTML=A

}