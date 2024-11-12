function fillCity()
{
    var i=state.selectedIndex
    switch(i)
    {
        case 1:
            var mpcity=[['gwalior',2000000],['jabalpur',1800000],['indore',1500000]]
            addOption(mpcity)
            break
        case 2:
            var hrcity=[['gurugram',1100000],['faridabad',1200000],['rohtak',1300000]]
            addOption(hrcity)
            break
        case 3:
            var upcity=[['agra',500000],['mathura',600000],['noida',700000]]
            addOption(upcity)
            break
    }
}

function addOption(arr)
{
    removeCity()
    for(i=0;i<arr.length;i++)
    {
        var opt=document.createElement('option')
        opt.text=arr[i][0]
        opt.value=arr[i][1]
        city.add(opt)
    }
}

function removeCity()
{
   for(i=city.options.length-1;i>=0;i--)
   {
    city.remove(i)
   }
}

function showDetails()
{
    var cityname=city.options[city.selectedIndex].text
    var htm=`<br><br><img src='${cityname}.png' width='250' height='250'><br>`
    htm+=`<h1><b>${cityname}</b></h1>`
    htm+=`<h2><i>Population ${city.value}</i></h2>`
    result.innerHTML=htm
}