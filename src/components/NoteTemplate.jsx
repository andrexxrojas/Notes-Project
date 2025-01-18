import { useState } from "react";
import useStore from '../useStore'
import '../App.css'


function NoteTemplate() {
    const addNote = useStore((state) => state.addNote)
    const setView = useStore((state) => state.setView)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const handleSave = () => {
        const newNote = {
            id: Date.now(),
            title,
            text,
            createdAt: new Date().toISOString()
        }
        addNote(newNote)
        setView('all')
    }

    const handleCancel = () => {
        setView('all')
    }

    return (
        <div className="note-template-container">
            <div className="title">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
            </div>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your note here..."
            />

            <div className="button-container">
                <button className="cancel_button" onClick={handleCancel}>
                    <span className="button_top">Cancel</span>
                </button>
                <button className="save_button" onClick={handleSave}>
                    <span className="button_top">Save</span>
                </button>
            </div>

        </div>
    )
}

export default NoteTemplate;