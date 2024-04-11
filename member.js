function skillsMember() {
  var member = document.getElementById("member");
  var memberValue = member.options[member.selectedIndex].value;
  var memberText = member.options[member.selectedIndex].text;

  if (memberValue == "0") {
    document.getElementById("skills").innerHTML = "";
  } else {
    var skills = document.getElementById("skills");
    var skillsValue = skills.options[skills.selectedIndex].value;
    var skillsText = skills.options[skills.selectedIndex].text;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("skills").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "skills.php?member=" + memberValue, true);
    xhttp.send();
  }
}