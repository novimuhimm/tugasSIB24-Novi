// Struktur Code
  //* Menampilkan Alert
  alert('Hallo Selamat Datang');
  let string = prompt("kalkulator")
  alert('Jawaban Anda' + string)

// alert('Hello world');
// console.log('statement baris kedua');
// console.log('statemen 1 baris')

/*comment multibaris*/

let btnOprtn = document.getElementById("btn-operator");
btnOprtn.addEventListener("click", () => {
    let first = document.getElementById("fstNum").value;
    let secnd = document.getElementById("secNum").value;
    let operation = document.getElementById("operation").value;
    let num1 = Number(first);
    let num2 = Number(secnd);
    if (secnd != "" && operation != "") {
       if (operation == "+") {
          let result = num1 + num2;
          document.getElementById("result").innerText = result;
        } else if (operation == "-") {
          let result = num1 - num2;
          document.getElementById("result").innerText = result;
        } else if (operation == "x") {
          let result = num1 * num2;
          document.getElementById("result").innerText = result;
        } else if (operation == ":") {
          let result = num1 / num2;
          document.getElementById("result").innerText = result;
        } else {
            alert("operasi tidak berhasil di eksekusi, cek inputan anda")
        }
    } else {
        alert("field tidak boleh kosong");
    }
});

//Javascript variabel
var fullName = 'Novi'
document.write(fullName)
document.writeln('<br>')


var fullName = "Sania"
document.write(fullName)
document.writeln('<br>')

fullName = "Lional Messi"
document.write(fullName)
document.writeln('<br>');
