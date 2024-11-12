var redbus=[
    {id:'100',drivername:'tony singh',type:'AC',seater:'50',fare:'1100',from:'bharatpur',to:'gwalior',days:'TTS'},
    {id:'200',drivername:'ratan singh',type:'NONAC',seater:'40',fare:'1500',from:'bharatpur',to:'bhopal',days:'R'},
    {id:'300',drivername:'angad singh',type:'AC',seater:'55',fare:'1400',from:'gwalior',to:'jaipur',days:'R'},
    {id:'400',drivername:'rathore singh',type:'AC',seater:'35',fare:'1300',from:'jaipur',to:'dehli',days:'R'},
    {id:'500',drivername:'madan singh',type:'NONAC',seater:'54',fare:'16900',from:'kanpur',to:'indore',days:'TTS'},
] 

function searchId()
{
    var x=''
    if(ac.checked)
    {
        x=ac.value
    }
    else
    {
       x=nonac.value
    }
    var data=redbus.filter((item)=>{
        return item.type==x
     })
      
     call(data)
    
}

function search()
{
   var data=redbus.filter((item)=>{
      return item.from.includes(city.value) || item.to.includes(city.value)
   })
    call(data)
}


function show()
{
    call(redbus)
}

function call(data)
{
   htm=`<table cellspacing=0 border=1 width=40% >`
   htm+=`<caption><h3>Red Bus Detail</h3></caption>`
   htm+=`<tr><th>Id</th><th>drivername</th><th>Type</th><th>Seater</th><th>Fare</th><th>From</th><th>To</th><th>Days</th></tr>`
   data.map((item)=>{
     htm+=`<tr><td>${item.id}</td><td>${item.drivername}</td><td>${item.type}</td><td>${item.seater}</td><td>${item.fare}</td><td>${item.from}</td><td>${item.to}</td><td>${item.days}</td></tr>`

   })
   htm+=`</table>`
   result.innerHTML=htm
}