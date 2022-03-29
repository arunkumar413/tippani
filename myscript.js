window.onload = read_notes;

function read_notes() {
  document.querySelector("textarea").disabled = true;
  document.querySelector("button").addEventListener("click", toggleEditing);

  if (localStorage.getItem("notes") == null) {
    localStorage.setItem("notes", ""); // set the local storage item
    document.querySelector("textarea").addEventListener("keyup", save_notes);
  } else {
    var my_notes = localStorage.getItem("notes"); // get the notes item from local storage
    document.querySelector("textarea").value = my_notes; // set the notes in the textarea
    document.querySelector("textarea").addEventListener("keyup", save_notes);
  }
}

function save_notes(e) {
  var my_notes = document.querySelector("textarea").value; // get the notes from the text area
  localStorage.setItem("notes", my_notes); // save the notes into local storage
}

function toggleEditing(e) {
  let x = document.querySelector("textarea").disabled;
  if (x === true) {
    document.querySelector("textarea").disabled = false;
    document.querySelector("button").innerText = "Enabled Editing";
    document.querySelector("button").style.backgroundColor = "green";
    document.querySelector("textarea").style.borderLeftColor = "green";
    document.querySelector("button").style.boxShadow = "5px 5px 5px #a3e3a3";
  } else {
    document.querySelector("textarea").disabled = true;
    document.querySelector("button").innerText = "Disabled Editing ";
    document.querySelector("button").style.backgroundColor = "maroon";
    document.querySelector("textarea").style.borderLeftColor = "maroon";
    document.querySelector("button").style.boxShadow = "5px 5px 5px #c87474";
  }
}
