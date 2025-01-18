import { create } from 'zustand'
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
)

export default useStore