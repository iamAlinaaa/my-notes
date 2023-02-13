import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [showNoteArea, setShowNoteArea] = React.useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
    // set NoteArea to false again because button is clicked
    setShowNoteArea(false);
  }

  function expandArea() {
    setShowNoteArea(true);
  }

  return (
    <div>
      <form className="create-note">
        {/* conditional renedering */}
        {showNoteArea ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          // check whether setSHowFullArea true of false
          // and change amount of rows
          rows={showNoteArea ? "3" : "1"}
          onClick={expandArea}
        />
        {/* adding floating action button */}
        <Zoom in={showNoteArea}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
