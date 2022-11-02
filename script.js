var form = document.getElementById('form');

form.isValidated = true;
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var elements = this.elements;
  for (var i = 0; i < elements.length - 1; i++) {
    console.log(elements[i]);
  }
});
