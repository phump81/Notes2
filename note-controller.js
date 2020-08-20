(function(exports) {
  function NoteController(notelist) {
    this.view = new NoteListView(notelist);
  }

  NoteController.prototype.updateAppElement = function() {
    document.getElementById("app").innerHTML = this.view.getHTML();
  }

  exports.NoteController = NoteController;
})(this);

var notelist = new NoteList();
notelist.createNew('Did it work?')
notelist.createNew('I doubt it')
notelist.createNew('Why not?')
notelist.createNew('F*ck knows!')
var controller = new NoteController(notelist);
controller.updateAppElement();

makeUrlChangeShowNoteForCurrentPage();

  function makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location) {
    return location.hash.split("#")[1];
  };

  function showNote(note) {
    document
      .getElementById("app")
      .innerText = getNote(note.replace("notes/", ""));

  function getNote(number) {
    return notelist.notes[number].text
  }
  };
