function call()
{
    var x=msg1.options[msg1.selectedIndex].text
    var y=msg2.options[msg2.selectedIndex].text

    var a=parseFloat(msg1.value)
    var b=parseFloat(msg2.value)
    var t=a+b
    var namt=t*q1.value
    var gst=namt*15/100 
    //alert(total)
        total=namt+gst
    
    var dis=0
    if(p1.checked)
    {
        dis=total*10/100
    }
    else if(p2.checked)
    {
        dis=total*20/100
    }
    else if(p3.checked)
    {
        dis=total*30/100
    }
    var netamount=total-dis

    var A="<table border=1 cellspacing=0 width='30%'>"
    A+="<caption><h3><font face='monotype corsiva' size=4 color='red'>pizza Invoice</font></h3></caption>"
    A+="<tr><th><img src='pizza logo.png' width=50 height=100/></th></tr>"
    A+="<tr><th><h3>"+x+"</h3></th></tr>"
    A+="<tr><th><img src='"+x+".png' width=150 height=150/></th></tr>"
    A+="</table>"
    A+="<table border=1 cellspacing=0 width='30%'>"
    A+="<tr><th>Base Price:</th><th>&#8377;"+a+"</th></tr>"
    A+="<tr><th>"+y+"</th><th>&#8377;"+b+"</th></tr>"
    A+="<tr><th>Enter Quantity:</th><th>"+q1.value+"</th></tr>"
    A+="<tr><th>Total Price:</th><th>"+namt+"</th></tr>"
    A+="<tr><th>GST:</th><th>&#8377;"+gst+"</th></tr>"
    A+="<tr><th>Discount:</th><th>&#8377;"+dis+"</th></tr>"
    A+="<tr><th>Total Net Amount:</th><th>&#8377;"+netamount+"</th></tr>"
    A+="</table>"

    result.innerHTML=A
}