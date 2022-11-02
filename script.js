var form = document.getElementById('form');

form.isValidated = true;
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var elements = this.elements;
  for (var i = 0; i < elements.length - 1; i++) {
    if (elements[i].value === '' || elements[i].value == null) {
      elements[i].classList.add('error');
    } else {
      elements[i].classList.remove('error');
    }
  }
});
