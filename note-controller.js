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
notelist.createNew("Wouldn't you like to now what the whole note says?")
notelist.createNew('This note, though slightly longer, is still of little interest.')
notelist.createNew('I trip. I pretend to run. I carry on running.')
notelist.createNew('Dayman. Fighter of the Nightman. Champion of the Sun.')
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
