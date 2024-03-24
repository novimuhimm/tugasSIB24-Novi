fetch('https://crudcrud.com/api/d85e47eb2266466ea63dc5a1757cb9c2/users')
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