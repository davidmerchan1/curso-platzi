const navbarEmail = document.querySelector(".navbar-email");
const menuEmail = document.querySelector(".desktop-menu");

const burguerMenu = document.querySelector(".menu");
const infoBurguerMenu = document.querySelector(".mobile-menu");

const infoShopingCar= document.querySelector(".product-detail");
const shopingCar = document.querySelector(".imgShoppingCar");

const divContainerProducts = document.querySelector(".cards-container");

const closeRightProductDetail = document.querySelector(".product-detail-close");
const asideProductDetail = document.querySelector(".product-detail-right");


//events
navbarEmail.addEventListener('click', showMenuEmail);
burguerMenu.addEventListener("click", showMenuMobile);
shopingCar.addEventListener("click", showShoppingCar);
closeRightProductDetail.addEventListener("click", closeProductDetail);



//fuctions 
function showMenuEmail(){
    menuEmail.classList.toggle("inactive");

    if(!menuEmail.classList.contains("inactive")){
        if(!infoShopingCar.classList.contains("inactive")){
            infoShopingCar.classList.add("inactive");
        }
    }
    asideProductDetail.classList.add("inactive");
}

function showMenuMobile(){
    infoBurguerMenu.classList.toggle("inactive");
    if(!infoBurguerMenu.classList.contains("inactive")){
        if(!infoShopingCar.classList.contains("inactive")){
            infoShopingCar.classList.add("inactive");   
        }  
    }
    asideProductDetail.classList.add("inactive");
}

function showShoppingCar(){ 
    infoShopingCar.classList.toggle("inactive");
    menuEmail.classList.add("inactive");
    infoBurguerMenu.classList.add("inactive");
    asideProductDetail.classList.add("inactive");

} 

const productList=[];

productList.push({
    name: "bike L",
    price: "$120,00",
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "bike Rt",
    price: "$220,00",
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "bike Z",
    price: "$180,00",
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

function listadoDeProoductos(listaProductos){
    for(producto of listaProductos){
   
        const div1 = document.createElement("div");
        div1.classList.add("product-card");
        const imagenes = document.createElement("img");
        imagenes.setAttribute("src", producto.imagen);
        imagenes.classList.add("image-product-info")
        
        const div2 = document.createElement("div");
        div2.classList.add("product-info");
       
        
        const div3 = document.createElement("div");
        const price = document.createElement("p")
        price.innerText = producto.price;
        const name = document.createElement("p")
        name.innerText = producto.name;
        
        
        const figure = document.createElement("figure");
        const icon = document.createElement("img");
        icon.setAttribute("src", "../icons/bt_add_to_cart.svg");
    
        
        figure.appendChild(icon);
    
        div3.appendChild(price);
        div3.appendChild(name);
    
        div2.appendChild(div3);
        div2.appendChild(figure);
    
        div1.appendChild(imagenes);
        div1.appendChild(div2);
    
        divContainerProducts.appendChild(div1);
        
    }
}

function closeProductDetail(){
    asideProductDetail.classList.add("inactive");
}

function showProductDetail(){
    console.log("funciona");
}




listadoDeProoductos(productList);




