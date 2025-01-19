// Styles
import "./App.css"

// Components:
import Navbar from "./components/Nav";
import NavEdit from "./components/NavEdit";
import NotesPage from "./components/NotesAll";
import NoteTemplate from "./components/NoteTemplate";

// Zustand:
import useStore from "./useStore";

function App() {
  const currentView = useStore((state) => state.currentView)

  return (
    <div className="app-container">
      {currentView === "all" ? <Navbar/> : <NavEdit/>}
      <div className="right-side">
      {currentView === 'all' ? <NotesPage /> : <NoteTemplate />}
      </div>
    </div>
  )
}

export default App;
