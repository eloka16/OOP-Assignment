var notesapp = require("../notesapp");
var same = new notesapp("name");
var expect = require('chai').expect;

 describe ("The creates function", function() {
	 it("stores all note_content in the notelist", function(){
		 expect(same.create("string")).to.equal("successful");
	 });
 });
 
 