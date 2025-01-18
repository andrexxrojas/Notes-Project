// Styles
import "./App.css"

// Components:
import Navbar from "./components/Nav";
import NotesPage from "./components/NotesAll"; //This is for viewing all notes
import NoteTemplate from "./components/NoteTemplate";
import useStore from "./useStore";

function App() {
  const currentView = useStore((state) => state.currentView)

  return (
    <div className="app-container">
      <Navbar/>
      <div className="right-side">
      {currentView === 'all' ? <NotesPage /> : <NoteTemplate />}
      </div>
    </div>
  )
}

export default App;