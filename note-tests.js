function testNoteTest() {
  var note = new Note('learn to code');
  assert.isTrue(note.getText() === 'learn to code');
};

function testNoteIDTest() {
  i = 0;
  var noteOne = new Note('try again');
  var noteTwo = new Note('fail again');
  var noteThree = new Note('fail better')
  assert.isTrue(noteOne.id === 0)
  assert.isTrue(noteTwo.id === 1)
  assert.isTrue(noteThree.id === 2)
}

testNoteTest();
testNoteIDTest();
