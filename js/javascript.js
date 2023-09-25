/*****المتغيرات *******/
var allproducts =document.querySelectorAll(".item")
var div =document.querySelector("#content")
var div2 =document.querySelector("#total")
var btn=document.querySelector("#btn")
var totalPrice=0
allproducts.forEach(
function(item){
    item.onclick=function(){
        div.innerHTML += item.textContent +"<br>"
       totalPrice+=+(item.getAttribute("price"))
       if(div.innerHTML != ""){
        btn.style.display="block"
        div2.style.display="block"
       }
      
    }
}

)
btn.onclick=function(){
    div2.innerHTML = div2.getAttribute("Total") +" "+ totalPrice 
}




