fetch('https://crudcrud.com/api/289952eac9fe451cb0810ef0734c3f19/users')
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