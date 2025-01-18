import { useEffect } from "react";
import useStore from "../useStore";

function NotesPage() {
    const notes = useStore((state) => state.notes)
    const setSelectedNote = useStore((state) => state.setSelectedNote)
    const setView = useStore((state) => state.setView)

    const handleNoteClick = (note) => {
        setSelectedNote(note)
        setView('template')
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
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NotesPage;