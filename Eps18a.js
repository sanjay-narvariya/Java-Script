function call()
{
    var i=msg1.selectedIndex
    switch(i)
    {
        case 1:
            var indfood=[['North indian thali',150],['South indian thali',200],
                                                               ['Gobi manchurian plate',250]]
            fillDD(indfood)
            break
        case 2:
           var chinfood=[['Yangzhou fried rice',300],['Pupusa salvadoran plate',350],
                                                                          ['Chinese nodal',355]]
           fillDD(chinfood)
           break
        case 3:
           var itafood=[['Italian pasta',400],['Grilled lamb',450],['Sliced pizza',500]]
           fillDD(itafood)
           break

    }
}

function fillDD(arr)
{
    removeOption()
    
    for(i=0;i<arr.length;i++)
    {
        var opt=document.createElement('option')
        opt.text=arr[i][0]
        opt.value=arr[i][1]
        msg2.add(opt)
    }
}

function removeOption()
{
    for(i=msg2.options.length-1;i>0;i--)
    {
        msg2.remove(i)
    }
}


function show()
{
    var txt=msg2.options[msg2.selectedIndex].text
    var price=parseFloat(msg2.value)
    var qantity=parseFloat(msg3.value)
    var dis1=parseFloat(p1.value)
    var dis2=parseFloat(p2.value)
    var dis3=parseFloat(p3.value)
    var tprice=price*qantity
     var gst=tprice*20/100
     var ttprice=tprice+gst
     var tdis='0'
     if(p1.checked)
     {
        var tdis=ttprice*dis1/100
     }
     else if(p2.checked)
     {
        var tdis=ttprice*dis2/100
     }
     else if(p3.checked)
     {
        var tdis=ttprice*dis3/100
     }
     var nprice=ttprice-tdis

    var htm=`<table border=1 cellspacing=0 width=40%>`
    htm+=`<caption><h3>Food Invoice</h3></caption>`
    htm+=`<tr><th><img src='haldiramlogo.png' width=200 height=100/></th></tr>`
    htm+=`<tr><th><img src='${txt}.png' width=200 height=100/></th></tr>`
    htm+=`<tr><th>${txt}</th></tr>`
    htm+=`</table>`
    htm+=`<table border=1 cellspacing=0 width=40%>`
    htm+=`<tr><th>Base Price:</th><th>&#8377;${tprice}</th></tr>`
    htm+=`<tr><th>Quantity:</th><th>${qantity}</th></tr>`
    htm+=`<tr><th>GST:20%</th><th>&#8377;${gst}</th></tr>`
    htm+=`<tr><th>Discount :</th><th>&#8377;${tdis}</th></tr>`
    htm+=`<tr><th>Total price result:</th><th>&#8377;${nprice}</th></tr>`
    htm+=`</table>`
    
    result.innerHTML=htm

}