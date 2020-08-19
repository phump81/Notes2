(function(exports) {
  function NoteController(notelist) {
    this.view = new NoteListView(notelist);
  }

  NoteController.prototype.updateAppElement = function() {
    document.getElementById("app").innerHTML = this.view.getHTML();
  }

  exports.NoteController = NoteController;
})(this);
