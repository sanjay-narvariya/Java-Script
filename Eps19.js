function call()
{
    var i=company.selectedIndex
    switch(i)
    {
        case 1:
            var MS=[['Alto',['Alto LXI',100,'Alto 800',200,'Alto LX',300]],
            ['Jimmy',['Jimmy LXI',400,'Jimmy 800',500,'Jimmy LX',600]]]
          
            fillOption(MS)
            break
        case 2:
            var MS=[['Seta',['Seta LXI',1000,'Seta 800',2000,'Seta LX',3000]],
            ['Meta',['Meta LXI',4000,'Meta 800',5000,'Meta LX',6000]]]
           
            fillOption(MS)
            break
      /*  case 3:
            var MS=[['Nexa',['Nexa LXI','Nexa 800','Nexa LX']],['Pezza',['Pezza LXI','Pezza 800','Pezza LX']]]
            fillOption(MS)
            break*/
    }
}

function fillOption(arr)
{
    removeOption()
    for(i=0;i<arr.length;i++)
    {
        var opt=document.createElement('option')
        opt.text=arr[i][0]
        opt.value=arr[i][1]
        car.add(opt)
    }
}

function removeOption()
{
    for(i=car.options.length-1;i>0;i--)
    {
        car.remove(i)
    }
}

function show()
{    
     var arrr=car.value
     var arrr=arrr.split(',')
    
    var htm=`<table border='1' cellspacing='0' width='30%' >`
htm+=`<tr><th><img src='logo.png' width=200 height=100/></th><th><img src='logo.png' width=200 height=100/></th><th><img src='logo.png' width=200 height=100/></th></tr>`
htm+=`<tr><th><img src='${arrr[0]}.png' width=150 height=150/></th><th><img src='${arrr[2]}.png' width=150 height=150/></th><th><img src='${arrr[4]}.png' width=150 height=150/></th></tr>`
htm+=`<tr><th><h3>${arrr[0]}</h3></th><th><h3>${arrr[2]}</h3></th><th><h3>${arrr[4]}</h3></th></tr>`
htm+=`<tr><th>Base Price: &#8377;${arrr[1]}</th><th>Base Price: &#8377;${arrr[3]}</th><th>Base Price: &#8377;${arrr[5]}</th></tr>`
htm+=`</table>`

result.innerHTML=htm
}