function NotesPage() {
    return (
        <div className="notes-container">
            <h1>Notes</h1>

            <div className="notes-grid">
                <div className="note-box">
                    <div className="title">
                        Learn the basics of being a UI Designer
                    </div>
                    <div className="preview">
                        Lorem ipsum dolor sit amet
                        something something latin, all other words
                        and stuff in latin, lechon.
                        Lorem ipsum dolor sit amet something something latin, all other words and stuff in latin, lechon.
                        Lorem ipsum dolor sit amet something something latin, all other words and stuff in latin, lechon.
                    </div>

                    <div className="color-tag" style={{ backgroundColor:"#F1ACE5" }}></div>
                </div>
            </div>
        </div>
    )
}

export default NotesPage;