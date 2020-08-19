function testSingleNoteViewTest() {
  var note = new Note('Favourite drink: Mezcal');
  var single = new SingleNoteView(note)
  assert.isTrue(single.returnHtml() === '<div>Favourite drink: Mezcal</div>')
}

testSingleNoteViewTest();
