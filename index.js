function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function checkout(productName) {
  alert(`Anda telah memilih ${productName}. Anda segera menghubungi Admin untuk proses pembayaran`);
}
