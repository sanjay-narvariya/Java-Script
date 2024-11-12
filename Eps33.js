var product=[
         {pid:'SHNO100',shopername:'ram singh',quantity:35,producttype:'pepsi',price:110, opendays:'tts'},
         {pid:'SHNO101',shopername:'pratap singh',quantity:25,producttype:'fanta',price:80, opendays:'ms'},
         {pid:'SHNO102',shopername:'shyam singh',quantity:40,producttype:'frooti',price:15, opendays:'fst'},
         {pid:'SHNO103',shopername:'khir singh',quantity:50,producttype:'maaza',price:100, opendays:'ssm'},         
]

function showProduct()
{
   call(product)
}

function search()
{
  var data=product.filter((item)=>{
               return item.producttype.includes(txt.value)
  })

  call(data)
}

function call(data)
{
    var htm=`<table cellspacing=0 border=1 width='50%'>`
    htm+=`<caption><h3>Product Details</h3></caption>`
    htm+=`<tr><th>product-id</th><th>Shoper-Name</th><th>Quantity</th><th>Product Name</th><th>product image</th><th>Price</th><th>Opening Days</th></tr>`

    data.map((item)=>{
               htm+=`<tr><td>${item.pid}</td><td>${item.shopername}</td><td>${item.quantity}</td><td>${item.producttype}</td><td><img src="${item.producttype}.png" width=120 height=60 /></td><td>${item.price}</td><td>${item.opendays}</td></tr>`
    })

    htm+=`</table>`

    result.innerHTML=htm
}