

document.addEventListener("DOMContentLoaded", function() {
    const cartTableBody = document.querySelector("#content tbody");
    var stt=1;

            const product = JSON.parse(localStorage.getItem('listProduct'))

            product.forEach(element => {
                const newRow = document.createElement("tr");
                newRow.innerHTML = `
                    <td class="col-anh p-4"><img src="${element.Image}"alt="img"></td>
                    <td class="py-5">${element.prName}</td>
                    <td class="py-5">${element.prPrice}</td>
                    <td class="py-5"><button class="btn btn-danger btn-sm remove-cart w-50">Xóa</button></td>
                `;
                cartTableBody.appendChild(newRow);
                stt++
            });


        const btn = cartTableBody.querySelectorAll(".remove-cart")
        btn.forEach(e=>{
            e.addEventListener("click",()=>{
                const parent = e.closest("tr");
                var productRemove = parent.querySelectorAll("td")
                var soTT = parseInt(productRemove[0].textContent);
                product.splice(soTT-1,1)
                localStorage.setItem('listProduct',JSON.stringify(product));
                parent.remove();
                this.location.reload()
        })
        })
        const clearProduct = document.querySelector(".clearProduct");
        clearProduct.addEventListener("click",()=>{
            product.splice(0,product.length);
            localStorage.setItem('listProduct',JSON.stringify(product));
            alert("Thanh toán thành công")
            this.location.reload()
        })

});
