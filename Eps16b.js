function call()
{
    var i=choose.selectedIndex
    switch(i)
    {
        case 1:
             var mpcity=['Select Animal','Lion','Horse','Dog','Pig']
             fillDD(mpcity,msg1)
             clearOption(msg2)
             clearOption(msg3)
             clearOption(msg4)
             break
        case 2:
             var hrcity=['Select Tree','Neem','Tulsi','Amrood','Pipal']
             fillDD(hrcity,msg2)
             clearOption(msg1)
             clearOption(msg3)
             clearOption(msg4)
             break
        case 3:
             var upcity=['Select country','India','Pakistan','Nepal','Bhootan']
             fillDD(upcity,msg3)
             clearOption(msg1)
             clearOption(msg2)
             clearOption(msg4)
             break
       case 4:
             var pcity=['Select Bird','Pegion','Peacock','Parrot','Sparrow']
             fillDD(pcity,msg4)
             clearOption(msg1)
             clearOption(msg2)
             clearOption(msg3)
             break
            
    }
}


function fillDD(arr,dd)
{
    clearOption(dd)

    for(i=0;i<arr.length;i++)
    {
       var opt=document.createElement('option')
       opt.text=arr[i]
       dd.add(opt)
    }
}

function clearOption(dd)
{
    for(j=dd.options.length-1;j>0;j--)
    {
        dd.remove(j)
    }
}


function clearOptionTag()
{
    clearOption(msg1)
    clearOption(msg2)
    clearOption(msg3)
    clearOption(msg4)

}