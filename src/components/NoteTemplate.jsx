import { useState, useEffect, useRef } from "react";
import useStore from '../useStore'
import '../App.css'

function NoteTemplate() {
    const addNote = useStore((state) => state.addNote)
    const updateNote = useStore((state) => state.updateNote)
    const setView = useStore((state) => state.setView)
    const setColor = useStore((state) => state.setColor)
    const selectedColor = useStore((state) => state.selectedColor)
    const selectedNote = useStore((state) => state.selectedNote)
    const editorRef = useRef(null)

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    useEffect(() => {
        if (selectedNote) {
            setTitle(selectedNote.title)
            editorRef.current.innerHTML = selectedNote.text
        }
    }, [selectedNote])

    const colors = [
        "#F1ACE5", // Pink
        "#ADE4B6", // Green
        "#A7C7E7", // Blue
        "#FFBF81", // Orange
        "#E6E6FA"  // Lavender
    ]

    const handleSave = () => {
        if (selectedNote) {
            updateNote(selectedNote.id, {
                title,
                text: editorRef.current.innerHTML,
                color: selectedColor
            })
        } else {
            const newNote = {
                id: Date.now(),
                title,
                text: editorRef.current.innerHTML,
                createdAt: new Date().toISOString()
            }
            addNote(newNote)
        }
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

            <div
                ref={editorRef}
                contentEditable={true}
                className="editor"
                placeholder="Write your note here..."
            />

            <div className="color-picker">
                {colors.map((color) => (
                    <div
                        key={color}
                        className={`color-option ${color === selectedColor ? 'selected' : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => setColor(color)}
                    />
                ))}
            </div>

            <button className="save_button" onClick={handleSave}>
                <span className="button_top">
                    {selectedNote ? 'Update' : 'Save'}
                </span>
            </button>
        </div>
    )
}

export default NoteTemplate;
