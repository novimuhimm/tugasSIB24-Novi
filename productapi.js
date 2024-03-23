fetch('https://crudcrud.com/api/51f516f6452249b694cab19f08e2eecd/users')
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