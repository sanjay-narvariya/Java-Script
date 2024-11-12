function fillCity()
{
    var i=state.selectedIndex
    switch(i)
    {
        case 0:
            cty=['Select city']
            addOption(cty)
            break
        case 1:
             var mpcity=['Select city','Gwalior','Jabalpur','Indore','Morena']
             addOption(mpcity)
             break
        case 2:
             var hrcity=['Select city','Gurugram','Faridabad','Rohtak','Hissar']
             addOption(hrcity)
             break
        case 3:
             var upcity=['Select city','Jhansi','Agra','Kanpur','Lucknow']
             addOption(upcity)
             break
       case 4:
             var pcity=['Select city','Ludhiyana','Mohali','Jallndhar','Amritsar']
             addOption(pcity)
             break
            
    }
}


function addOption(arr)
{
   removeCities()

    for(i=0;i<arr.length;i++)
    {
       var opt=document.createElement('option')
       opt.text=arr[i]
       city.add(opt)
    }
}

function removeCities()
{
    for(j=city.options.length-1;j>=0;j--)
    {
        city.remove(j)
    }
}