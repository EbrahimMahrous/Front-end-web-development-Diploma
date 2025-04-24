


var products = document.querySelectorAll(".row #card")

var div = document.querySelector("#displayProductSelected")

var btn = document.querySelector("#btnShowTotalPrice")



var totalPrice = 0


products.forEach(function(item){
    item.onclick = function(){

        totalPrice += +(item.getAttribute("price"))
        
        div.innerHTML += item.textContent + " <br> "

        if (div.innerHTML != "" ){
            btn.style.display = "block"
        }
    }
})

btn.onclick = function(){

    console.log(totalPrice)

    document.querySelector("#btnTotalPrice").textContent = totalPrice

}




