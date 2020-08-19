(function(exports) {
  function NoteListView(noteList) {
    this.list = noteList
  };

  exports.NoteListView = NoteListView;

  NoteListView.prototype.getHTML = function () {

    var notearray = this.list.getList();
    var textarray = [];

    for(let i = 0; i < notearray.length; i++) {
      textarray.push(notearray[i].getText().slice(0, 20));
    }

    return '<ul><li><div>' + textarray.join('</div></li><li><div>') + '</div></li></ul>';

  };

})(this);
