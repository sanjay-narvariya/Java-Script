function call()
{
    var i=ch1.selectedIndex
    switch(i)
    {
        case 1:
             var mpcity=[['Select city',0],['Gwalior',10000],['Jabalpur',20000],['Indore',30000]]
             addOption(mpcity)
             break
        case 2:
             var hrcity=[['Select city',0],['gurugram',11000],['faridabad',22000],['Rohtak',33000]]
             addOption(hrcity)
             break
    }
}

function addOption(arr)
{
    removeOptions()
    for(i=0;i<arr.length;i++)
    {
        var opt=document.createElement('option')
        opt.text=arr[i][0]
        opt.value=arr[i][1]
        ch2.add(opt)
    }
}

function removeOptions()
{
    for(i=ch2.options.length-1;i>0;i--)
    {
        ch2.remove(i)
    }

}

function show()
{
    var cityname=ch2.options[ch2.selectedIndex].text
    var htm=`<b><font size='5'>${cityname}</font></b><br><br>`
    htm+=`<h4>Population: ${ch2.value}</h4><br><br>`
    htm+=`<img src='${cityname}.png' width='500'/>`

    result.innerHTML=htm
}