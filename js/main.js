function validateForm(element, element1, element2) {
  var x = document.forms["contact"][element].value;

  if (x == "" || x == null) {
    document.getElementById(element1).style.backgroundColor = "#f5abb5";
    setTimeout(function(){
      alert(element2 + " sahəsi doldurulmalıdır.");
    }, 100);
    return false;
  }}
