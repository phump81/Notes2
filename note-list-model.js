(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  exports.NoteList = NoteList;

  NoteList.prototype.getList = function () {
    return this.notes;
    };

  NoteList.prototype.createNew = function (text) {
    var note = new Note(text)
    this.notes.push(note)
    };
})(this);
