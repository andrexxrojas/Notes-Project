// src/store/useStore.js
import { create } from 'zustand'

const useStore = create((set) => ({
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
    setSelectedNote: (note) => set({ selectedNote: note })

}))

export default useStore