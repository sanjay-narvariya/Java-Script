function fillCase()
{
    var i=cases.selectedIndex
    
    switch(i)
    {
        case 1:
            var anml=['Lion','Elephant','Bear','Cow']
            fillDD(anml,ani)
            break
        case 2:
            var trs=['Neem','Peepal','Ashok','Babool']
            fillDD(trs,tre)
            break
        case 3:
            var cntrs=['India','America','Japan','Rassia']
            fillDD(cntrs,coun)
            break
        case 4:
            var brds=['Peacock','Hen','Pigeon','Owl']
            fillDD(brds,bir)
            break
    }
}
function fillDD(arr,dd)
{
    callRemove(dd)
    for(i=0;i<arr.length;i++)
     {
      var opt=document.createElement('option')
      opt.text=arr[i]
      dd.add(opt)
      }
}

function callRemove(dd)
{
   for(i=dd.options.length-1;i>0;i--)
   {
      dd.remove(i)
   }
}

function clearAllOptions()
{
    callRemove(ani)
    callRemove(tre)
    callRemove(coun)
    callRemove(bir)
}