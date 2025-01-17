import { useState } from "react";

function NoteTemplate() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value); // For contenteditable div, use innerText
    };

    const handleTextChange = (event) => {
        setText(event.target.value); // For textarea, use value
    };

    return (
        <div className="note-template-container">
            <div className="title">
                <input 
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Title"
                />
            </div>

            <textarea 
                value={text}
                onChange={handleTextChange}
                placeholder="Write your note here..."
            />
        </div>
    )
}

export default NoteTemplate;