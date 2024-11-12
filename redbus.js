var redbus=[
          {id:'MP07CA51',drivername:'ram singh',seater:35,type:'ac',fare:1100, from:'gwalior',to:'agra',days:'tts'},
          {id:'MP07CA52',drivername:'pratap singh',seater:25,type:'nonac',fare:800, from:'gwalior',to:'bhind',days:'ms'},
          {id:'MP07CA53',drivername:'shyam singh',seater:40,type:'ac',fare:1500, from:'gwalior',to:'bhopal',days:'r'},
          {id:'MP07CA54',drivername:'khir singh',seater:50,type:'nonac',fare:1000, from:'gwalior',to:'indore',days:'r'},
         ]

  function showBus()
  { 
      call(redbus)
  }

  function search()
  {
      var data=redbus.filter((item)=>{
              return item.from.includes(city.value) || item.to.includes(city.value) 
      })

      call(data)
  }


  function call(data)
  {        
               var htm=`<table cellspacing=0 border=1 width='40%'> `
               htm+=`<caption><h3>Red Bus Details</h3></caption>`
               htm+=`<tr><th>Id</th><th>Driver</th><th>Seats</th><th>Type</th><th>Fare</th><th>From</th><th>To</th><th>Days</th></tr>`
          
      data.map((item)=>{
               htm+=`<tr><td>${item.id}</td><td>${item.drivername}</td><td>${item.seater}</td><td>${item.type}</td><td>${item.fare}</td><td>${item.from}</td><td>${item.to}</td><td>${item.days}</td></tr>`
      })
      htm+=`</table>`

      result.innerHTML=htm
  }
             
