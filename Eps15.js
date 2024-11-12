function call1()
{
   var carbrand=cars.options[cars.selectedIndex].text
    carname.innerHTML=carbrand
    price.innerHTML=cars.options[cars.selectedIndex].value
  
    // cimg.src=carbrand+".png"
   cimg.src=`${carbrand}.png`
}