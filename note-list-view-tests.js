function testNoteListViewTest() {
  var noteList = new NoteList();
  noteList.createNew('some text')
  noteList.createNew('more text')
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === '<ul><li><div>some text</div></li><li><div>more text</div></li></ul>')
};

function testFirstTwentyCharactersTest() {
  var notelist = new NoteList();
  notelist.createNew('This string is clearly longer than twenty characters')
  notelist.createNew('Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.')
  var view = new NoteListView(notelist);
  assert.isTrue(view.getHTML() === '<ul><li><div>This string is clear</div></li><li><div>Ever tried. Ever fai</div></li></ul>')
}

function testGetURLsTest() {
  var noteList = new NoteList();
  noteList.createNew('some text')
  noteList.createNew('more text')
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === '<ul><li><div><a href="#notes/0">Some stuff</a></div></li><li><div><a href="#notes/1">More stuff</a></div></li></ul>')
}

testNoteListViewTest();
testFirstTwentyCharactersTest();
testGetURLsTest();
