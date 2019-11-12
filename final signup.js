function validateForm() {
    var x = document.inputs["firstName"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }