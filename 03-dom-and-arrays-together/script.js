// script.js

//Easy//

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];


const productlist=document.getElementById("product-list");

const prods = products.map(value => `<li>${value.name}</li>`);

productlist.innerHTML=prods.join('');




// Medium //
const productlist1=document.getElementById("product-list");
const prods1=products.filter(value=> value.inStock);
const items=inStockProducts.map(product=>

    `<li class="product-item">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
</li>

`);
productlist1.innerHTML=prods1.join('');  


// Hard //
const prodList = document.getElementById("product-list");

prodList.innerHTML = "";

products.forEach(product => {
    const li = document.createElement("li");
    li.classList.add("product-item");

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;

    li.appendChild(name);
    li.appendChild(price);

    if (!product.inStock) {
        li.classList.add("out-of-stock");
    }

    if (product.category.toLowerCase() === "electronics") {
        li.classList.add("category-electronics");
    } else if (product.category.toLowerCase() === "books") {
        li.classList.add("category-books");
    }

    prodList.appendChild(li);
});

const totalValue = products.reduce((sum, product) => {
    return product.inStock ? sum + product.price : sum;
}, 0);

const totalDiv = document.createElement("div");
totalDiv.textContent = `Total Value of In-Stock Items: $${totalValue}`;
totalDiv.style.marginTop = "20px";
totalDiv.style.textAlign = "center";
totalDiv.style.fontWeight = "bold";

document.getElementById("app-container").appendChild(totalDiv);




