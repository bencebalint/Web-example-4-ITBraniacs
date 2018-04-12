function sendRequest() {
  var nr1 = document.getElementById("nr1").value;
  var nr2 = document.getElementById("nr2").value;

  if (nr1 == "" || nr2 == "") {
    alert("No number added!");
  }

  if (isNaN(nr1) || isNaN(nr2)) {
    alert("Only numbers!");
  }

  var http = new XMLHttpRequest();
  var url = "http://localhost:5000/add";
  var params = "nr1=" + nr1 + "&nr2=" + nr2;
  http.open("POST", url, true);

  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) {
          var a = JSON.parse(http.responseText);
          alert(a.content);
      }
  }
  http.send(params);
}
