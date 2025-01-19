import useStore from '../useStore'
import { useRef } from 'react'

function NavEdit() {
    const fileInputRef = useRef(null);

    const applyFormat = (command) => {
        document.execCommand(command, false, null)
    }

    const handleImageClick = () => {
        fileInputRef.current.click();
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '100%';
                document.execCommand('insertHTML', false, img.outerHTML);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <nav>
            <h3>LogNotes</h3>

            <ul>
                <button
                    className="bold btn"
                    onClick={() => applyFormat('bold')}
                >
                    <p>B</p>
                </button>
                <button
                    className="italic btn"
                    onClick={() => applyFormat('italic')}
                >
                    <p>I</p>
                </button>
                <button
                    className="underline btn"
                    onClick={() => applyFormat('underline')}
                >
                    <p>U</p>
                </button>
                <button className="image btn" onClick={handleImageClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M448 80c8.8 0 16 7.2 16 16l0 319.8-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3L48 96c0-8.8 7.2-16 16-16l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
                    </svg>
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    style={{ display: 'none' }}
                />

            </ul>
        </nav>
    )
}

export default NavEdit;