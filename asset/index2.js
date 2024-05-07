let bioData = {
    nama: 'Izhar Afiat tartilla',
    role: 'Frontend Dev',
    availability: 'Fulltime',
    usia: 19,
    lokasi: 'Jakarta',
    pengalaman: '',
    email: 'udulludell2@gmail.com'
  };

  // fungsi isi form
  function isiForm() {
    document.getElementById('namaInput').value = bioData.nama;
    document.getElementById('roleInput').value = bioData.role;
    document.getElementById('availabilityInput').value = bioData.availability;
    document.getElementById('usiaInput').value = bioData.usia;
    document.getElementById('lokasiInput').value = bioData.lokasi;
    document.getElementById('pengalamanInput').value = bioData.pengalaman;
    document.getElementById('emailInput').value = bioData.email;
 }

//  tombol reset
 document.getElementById('resetBtn').addEventListener('click', function() {
    isiForm();
    document.getElementById('bio-Data').style.display = 'block';
  });

  // untuk tombol submit form
  document.getElementById('btn-submit').addEventListener('click', function(event) {
   event.preventDefault();
   if(confirm('apakah anda yakin mengubah data?')){
      bioData.nama = document.getElementById('namaInput').value;
      bioData.role = document.getElementById('roleInput').value;
      bioData.availability = document.getElementById('availabilityInput').value;
      bioData.usia = document.getElementById('usiaInput').value;
      bioData.lokasi = document.getElementById('lokasiInput').value;
      bioData.pengalaman = document.getElementById('pengalamanInput').value;
      bioData.email = document.getElementById('emailInput').value;
      
      document.getElementById('namaDisplay').textContent = bioData.nama;
      document.getElementById('roleDisplay').textContent = bioData.role;
      document.getElementById('avail-Display').textContent = bioData.availability;
      document.getElementById('usia-Display').textContent = bioData.usia;
      document.getElementById('lokasi-Display').textContent = bioData.lokasi;
      document.getElementById('pengalaman-Display').textContent = bioData.pengalaman;
      document.getElementById('email-Display').textContent = bioData.email;
      
      document.getElementById('formContainer').style.display = 'none';
      alert('Data telah berhasil diubah.');
    }

  });


  // Fungsi untuk show/hide form
function toggleForm() {
  let formContainer = document.getElementById('formContainer');
  if (formContainer.style.display === 'none') {
      formContainer.style.display = 'block';
  } else {
      formContainer.style.display = 'none';
  }
}

// Event listener untuk tombol show/hide
document.getElementById('toggleButton').addEventListener('click', toggleForm);
