function call()
{
    var i=selct.selectedIndex
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
{  removeOption()
    for(i=0;i<arr.length;i++)
    {
        var opt=document.createElement('option')
        opt.text=arr[i][0]
        opt.value=arr[i][1]
        choice.add(opt)
    }
}

function removeOption()
{  for(i=choice.options.length-1;i>0;i--)
    {
    choice.remove(i)
    }
}

function fillData()
{
     var ab=choice.options[choice.selectedIndex].text
     var bp=parseInt(choice.value)
     var qt=parseInt(qty.value)
     var g1=parseInt(p1.value)
     var g2=parseInt(p2.value)
     var g3=parseInt(p3.value)
     var t=bp*qt
     var gst=t*20/100
     var tp=bp*qt+gst
     var dis=0
     var A=0
     var tpr=tp-dis
     if(p1.checked)
     {
        dis=tp*g1/100
        A=g1
        tpr=tp-dis
     }
     else if(p2.checked)
     {
        dis=tp*g2/100
        A=g2
        tpr=tp-dis
     }
     else if(p3.checked)
     {
        dis=tp*g3/100
        A=g3
        tpr=tp-dis
     }
     
    // var tp=bp*qt+gst
     htm=`<table border='1' cellspacing='0' width='30%' >`
     htm+=`<caption><h3>Food Invoice</h3></caption>`
     htm+=`<tr><th><img src='haldiramlogo.png' width=200 height=100/></th></tr>`
     htm+=`<tr><th><img src='${ab}.png' width=150 height=150/></th></tr>`
     htm+=`<tr><th><h3>${ab}</h3></th></tr>`
     htm+=`</table>`
    htm+=`<table border=1 cellspacing=0 width='30%'>`
    htm+=`<tr><th>Base Price:</th><th>&#8377;${bp}</th></tr>`
    htm+=`<tr><th>Quantity:</th><th>${qt}</th></tr>`
    htm+=`<tr><th>GST:20%</th><th>&#8377;${gst}</th></tr>`
    htm+=`<tr><th>Discount ${A}%:</th><th>&#8377;${dis}</th></tr>`
    htm+=`<tr><th>Total price result:</th><th>&#8377;${tpr}</th></tr>`
    htm+=`</table>`

    result.innerHTML=htm

}