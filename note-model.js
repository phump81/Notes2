var i = 0;

(function(exports) {
  function Note(text) {
    this.text = text;
    this.id = i;
    i++;
  };

  Note.prototype.getText = function () {
    return this.text;
  }

  exports.Note = Note;
})(this);
