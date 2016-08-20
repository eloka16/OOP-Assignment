var notesapp = require("../notesapp");
var same = new notesapp("name");
var expect = require('chai').expect;

describe("The Notes class", function(){
    it("should have a constructor", function(){
        expect(same).to.be.an.instanceof(notesapp);
    });
});

 describe ("The creates function", function() {
	 it("stores all note_content in the notelist", function(){
		 expect(same.create("string")).to.equal("successful");
	 });
 });
 
 
 describe ("The listNotes function", function() {
	 var same = new notesapp("name");
	 it("This list all the content if not empty", function() {
		 expect(same.listNotes()).to.equal(undefined);
	 });
 });
 
 describe ("The get function", function() {
	 var same = new notesapp("name");
	 it("This lists all the content if not empty", function() {
		 expect(same.get("yin")).to.equal('sorry, input incorrect');
	 });
 });
 
 describe("The edit function", function() {
	 it("This function edits input in the array", function() {
		 expect(same.edit("Tes")).to.equal(undefined);
	 });
 });
 
 describe ("The delete function", function() {
	 it ("Deletes a note content using the note_id", function() {
		 expect(same.delete()).to.equal(undefined);
	 });
 }); 