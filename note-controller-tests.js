function testNoteControllerTest() {
  var list = new NoteList();
  var cont = new NoteController(list);
  assert.isTrue(cont.view instanceof NoteListView)
}

function testInnerHTMLTest() {
  var list = new NoteList();
  list.createNew("Fave drink: Mezcal")
  var controller = new NoteController(list);
  controller.updateAppElement();
  assert.isTrue(document.getElementById("app").innerHTML === '<ul><li><div>Fave drink: Mezcal</div></li></ul>');
}

testNoteControllerTest();
testInnerHTMLTest();
