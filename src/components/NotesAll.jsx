import useStore from "../useStore";

function NotesPage() {
    const notes = useStore((state) => state.notes)

    return (
        <div className="notes-container">
            <h1>Notes</h1>

            <div className="notes-grid">
                {notes.map(note => (
                    <div key={note.id} className="note-box">
                        <div className="title">{note.title}</div>
                        <div className="preview">{note.text}</div>
                        <div className="color-tag" style={{ backgroundColor: "#F1ACE5" }}></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NotesPage;