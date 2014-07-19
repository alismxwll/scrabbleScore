describe("scrabbleScore", function() {
	it("will return the value of any letter worth 1 point", function() {
		scrabbleScore("A").should.equal(1);
	});
});