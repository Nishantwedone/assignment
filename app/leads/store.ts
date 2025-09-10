import create from 'zustand'

type State = {
  selected: any,
  setSelected: (s:any)=>void
}

const useLeadsStore = create<State>((set)=>({
  selected: null,
  setSelected: (s)=>set({selected:s})
}))

export default useLeadsStore
