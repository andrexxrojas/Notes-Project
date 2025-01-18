import { useEffect } from "react";
import useStore from "../useStore";

function NotesPage() {
    const notes = useStore((state) => state.notes)
    const setSelectedNote = useStore((state) => state.setSelectedNote)
    const setView = useStore((state) => state.setView)
    const deleteNote = useStore((state) => state.deleteNote);

    const handleNoteClick = (note) => {
        setSelectedNote(note)
        setView('template')
    }

    const handleDeleteClick = (noteId) => {
        deleteNote(noteId);
    }

    return (
        <div className="notes-container">
            <h1>Notes</h1>

            <div className="notes-grid">
                {notes.map(note => (
                    <div 
                        key={note.id} 
                        className="note-box"
                        onClick={() => handleNoteClick(note)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="title">{note.title}</div>
                        <div className="preview">{note.text}</div>
                        <div className="color-tag" style={{ backgroundColor: note.color }}></div>
                        <div 
                            className="delete-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteClick(note.id);
                            } }
                        >X</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NotesPage;
