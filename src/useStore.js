import { create } from 'zustand'
<<<<<<< HEAD
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set) => ({
      notes: [],
      currentView: 'all',
      selectedNote: null,
      selectedColor: null,

      setColor: (color) => set({ selectedColor: color }),
      
      setView: (view) => set((state) => {
        if (view === 'template' && !state.selectedColor && !state.selectedNote) {
          return state
        }
        return { currentView: view }
      }),
      
      addNote: (note) => set((state) => {
        const processedNote = {
          ...note,
          title: note.title.trim() || 'Untitled Note',
          text: note.text.trim() || 'Empty note...',
          color: state.selectedColor
        }
        return {
          notes: [...state.notes, processedNote],
          currentView: 'all',
          selectedNote: null
        }
      }),

      updateNote: (id, updatedNote) => set((state) => ({
        notes: state.notes.map(note =>
          note.id === id ? { 
            ...note, 
            ...updatedNote,
            title: updatedNote.title.trim() || 'Untitled Note',
            text: updatedNote.text.trim() || 'Empty note...'
          } : note
        ),
        currentView: 'all',
        selectedNote: null
      })),
      
      setSelectedNote: (note) => set({ 
        selectedNote: note,
        selectedColor: note.color // Set the color to match the selected note
      }),

      clearNotes: () => set({ notes: [] }) // This is for clearing all notes
    }),
    {
      name: 'notes-storage',
      version: 1
    }
  )
=======
import { persist, createJSONStorage } from 'zustand/middleware'

const useStore = create(
    persist(
        (set) => ({
            notes: [],
            currentView: 'all',
            selectedNote: null,

            setView: (view) => set({ currentView: view }),
            addNote: (note) => set((state) => ({
                notes: [...state.notes, note],
                currentView: 'all'
            })),

            updateNote: (id, updatedNote) => set((state) => ({
                notes: state.notes.map(note =>
                    note.id === id ? { ...note, ...updatedNote } : note
                )
            })),

            setSelectedNote: (note) => set({ selectedNote: note }),

            deleteNote: (id) => set((state) => ({
                notes: state.notes.filter(note => note.id !== id)
            })),
        }),

        {
            name: 'notes-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                notes: state.notes
            })
        }
    )
>>>>>>> 460eed963859cb7a98f9df7e2ba84c7a5bb6302d
)

export default useStore