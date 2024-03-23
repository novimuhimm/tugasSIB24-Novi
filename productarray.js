document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");
  
    const products = [
      { name: "Nastar", image: "img/product1.jpg", price: "$150.000" },
      { name: "Coklat Almond", image: "img/product2.jpg", price: "$100.000" },
      { name: "Putri Salju", image: "img/product3.jpg", price: "$80.000" },
      { name: "Lidah Kucing", image: "img/product4.jpg", price: "$60.000" },
      { name: "Kue Semprit Coklat", image: "img/product5.jpg", price: "$90.000" }
    ];
  
    products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
  
      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.name;
  
      const productName = document.createElement("h2");
      productName.textContent = product.name;
  
      const productPrice = document.createElement("p");
      productPrice.textContent = "Price: " + product.price;
  
      productDiv.appendChild(productImage);
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
  
      productList.appendChild(productDiv);
    });
  });