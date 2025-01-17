// Styles
import "./App.css"

// Components:
import Navbar from "./components/Nav";
import NotesPage from "./components/NotesAll"; //This is for viewing all notes
import NoteTemplate from "./components/NoteTemplate";

function App() {
  return (
    <div className="app-container">
      <Navbar/>
      <div className="right-side">
        <NotesPage/>
        {/* <NoteTemplate/> */}
      </div>
    </div>
  )
}

export default App;