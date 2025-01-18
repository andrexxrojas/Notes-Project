import { useState } from "react";
import useStore from "../useStore";

function Navbar() {
    const setView = useStore((state) => state.setView)

    const [selectedColor, setSelectedColor] = useState({
        clr1: {
            active: false,
            color: "#14C474"
        },
        clr2: {
            active: false,
            color: "#04A4FC"
        },
        clr3: {
            active: false,
            color: "#FFB14E"
        },
        clr4: {
            active: false,
            color: "#F1ACE5"
        },
        clr5: {
            active: false,
            color: "#FC441C"
        }
    });

    const handleAddClick = () => {
        setView('template')
    }

    function handleColor(colorKey) {
        const updatedColors = Object.keys(selectedColor).reduce((acc, key) => {
            acc[key] = { ...selectedColor[key], active: key === colorKey };
            return acc;
        }, {});
        setSelectedColor(updatedColors);
    }

    return (
        <nav>
            <h3>LogNotes</h3>

            <ul>
                <button id="add-btn" onClick={handleAddClick}>
                    <p>+</p>
                </button>

                {Object.entries(selectedColor).map(([key, value]) => (
                    <li
                        key={key}
                        className={`clr-option ${key} ${value.active ? "active" : ""}`}
                        onClick={() => handleColor(key)}
                        style={{
                            backgroundColor: value.color,
                            border: value.active ? "2px solid black" : "none",
                        }}
                    ></li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar