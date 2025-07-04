const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    var username = document.getElementById('user').value;

  if (username == 'Marthina'){}
  else{
    e.preventDefault();
    alert('Sorry that is not the name of the Birthday Girl. Try again');
  }
})