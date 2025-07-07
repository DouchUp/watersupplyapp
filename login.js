function checkAdminLogin() {
  const adminLocal = localStorage.getItem('water_local');
  if (adminLocal === null || adminLocal === undefined) {
    window.location.href = 'login.html';
  }
}
checkAdminLogin();