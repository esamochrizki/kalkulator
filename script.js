let ekspresi = '';

function tekan(nilai) {
  ekspresi += nilai;
  document.getElementById('layar').innerText = ekspresi;
}

function hitung() {
  try {
    let hasil = eval(ekspresi);
    document.getElementById('layar').innerText = hasil;
    ekspresi = hasil.toString();
  } catch {
    document.getElementById('layar').innerText = 'Error';
    ekspresi = '';
  }
}

function hapus() {
  ekspresi = '';
  document.getElementById('layar').innerText = '0';
}