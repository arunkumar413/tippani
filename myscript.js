window.onload = read_notes;

function read_notes() {
	if(localStorage.getItem('notes')==null){
		localStorage.setItem('notes', '');  // set the local storage item
		document.querySelector('textarea').addEventListener('keyup',save_notes);
}

else {
  var my_notes = localStorage.getItem('notes'); // get the notes item from local storage
  document.querySelector('textarea').value= my_notes; // set the notes in the textarea 
  document.querySelector('textarea').addEventListener('keyup',save_notes);
  }
}

function save_notes(e){
  var my_notes = document.querySelector('textarea').value; // get the notes from the text area
  localStorage.setItem('notes',my_notes);  // save the notes into local storage
}
