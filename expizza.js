function call()
{
    var pizabrand=pizza.options[pizza.selectedIndex].text
    // alert(pizabrand)
    var tl=tops.options[tops.selectedIndex].text
    // alert(tl)
    var p=parseInt(pizza.value)
    var t=parseInt(tops.value)
    var namt=p+t
    var gst=namt*15/100
    
    var total=namt+gst
     //alert(1)
    var A="<table border=1 cellspacing=0 width='30%'>"
    A+="<caption><h3><font face='monotype corsiva' size=4 color='red'>pizza Invoice</font></h3></caption>"
    A+="<tr><th><img src='pizza logo.png' width=50 height=100/></th></tr>"
    A+="<tr><th><h3>"+pizabrand+"</h3></th></tr>"
    A+="<tr><th><img src='"+pizabrand+".png' width=150 height=150/></th></tr>"
    A+="</table>"
    A+="<table border=1 cellspacing=0 width='30%'>"
    A+="<tr><th>Base Price:</th><th>&#8377;"+pizza.value+"</th></tr>"
    A+="<tr><th>"+tl+"</th><th>&#8377;"+tops.value+"</th></tr>"
    A+="<tr><th>GST:</th><th>&#8377;"+gst+"</th></tr>"
    A+="<tr><th>Total Amount:</th><th>&#8377;"+total+"</th></tr>"
    A+="</table>"

    result.innerHTML=A
}