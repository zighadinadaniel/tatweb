import items from "/data.js"
const product= document.getElementById("product")


function renderProducts(){
    let newProducts = items.map(item=>{
        return   `
                <div class="product-container">
                        <img class="product-image" src="${item.image}">
                    <div>
                        <p class="product-name">${item.name}</p>
                        <p class="product-price">$ ${item.price}</p>
                    </div>
                        <button class="product-button">Purchase</button> 
                    
                 </div>
                `
    })
    
    return product.innerHTML+= newProducts.join(" ")
    console.log(newProducts)
    
}

renderProducts()






                    
         