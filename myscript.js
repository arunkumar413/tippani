window.onload = read_notes;

function read_notes() {
if(localStorage.getItem('notes')==null){
localStorage.setItem('notes', '');
}

else {
  var my_notes = localStorage.getItem('notes');
  document.querySelector('textarea').value= my_notes;
  document.querySelector('textarea').addEventListener('keyup',save_notes);

  }
}

function save_notes(e){
  var my_notes = document.querySelector('textarea').value;
  localStorage.setItem('notes',my_notes)
}
