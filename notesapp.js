module.exports = function (author){
	//constructor with author and note 
	
	this.author = author;
	this.notes = [];
	this.create = create;
	this.listNotes = listNote;
	/** New function added to the class
	* to check if author was Defined
	*/
	function checkAuthor() {
		if(this.author === "") {return "arthor needs to be defined";}
	}
	function create(note_content) {
		/** create(note_content) - This function takes
		* the note content as the parameter and adds
		* it to the notes list of the object.
		*/
		if (note_content.length < 0) {return "This function needs a value";}//For test case
		return "successful";
		this.note.push(note_content);{return this.notes;}
	}
	function listNote(){
		/** listNotes() - This function list
		* the index of the note_content in the note list
		* the content of the note
		* the author
		*/	
	    for (var i = 0; i < this.notes.length; i++) {
	   		console.log(i);
	   		console.log(this.notes[i]);
	   		console.log("By author " + this.author);
	    }
	}
	this.get = function(note_id) {
		if (note_id.constructor === String) return 'sorry, input incorrect';
		for (let i=0; i<this.notes.length; i++) {
			return this.notes[note_id];
		}
	}
		search(search_text) {
		for (let i = 0; i < this.notes.length; i++) {
			if (this.notes[i].indexOf(search_text) > 0) {
				return "Showing results for search " + search_text + " in " + this.notes[i];
			}
		}
	}
	this.delete = function(note_id) {	
		delete this.notes[note_id];
		}  
	
	this.edit = function(note_id, new_content) {
		this.notes[note_id] = new_content;
		}
}
