
//// phan them gio hang

const listButton = document.querySelectorAll(".add-cart");

var listProduct = [];

listButton.forEach((e) => {
    e.addEventListener("click", () => {
        var validateLogin = localStorage.getItem('Login')==='true';
        if(validateLogin){
            const parent = e.closest(".card");
            const linkImg = parent.querySelector("img").getAttribute("src");
            const productName = parent.querySelector(".card-title").textContent;
            const productPrice = parent.querySelector(".card-text").textContent;
    
            var product = {
                Image: linkImg,
                prName: productName,
                prPrice: productPrice
            };
    
            listProduct.push(product);
    
            var productJson = JSON.stringify(listProduct);
    
            localStorage.setItem('listProduct', productJson);
            alert(`${productName} đã được thêm vào giỏ hàng!`);
        }
        else{
            $("#sign-in").modal("show")
        }

        
    });
});
