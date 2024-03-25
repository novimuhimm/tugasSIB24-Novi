fetch('https://crudcrud.com/api/e1b7a9ee3e494e3bb54589bea13f34e7/users')
  .then((Response) => Response.json())
  .then((data) => {
    const produk = document.getElementById('produk');

    data.forEach((product) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product._id}</td>
        <td>${product.nama}</td>
        <td>${product.jumlah}</td>
        <td>${product.harga}</td>
        `;

      produk.querySelector('thead').appendChild(row);
    });
  });