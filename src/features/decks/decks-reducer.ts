import { DeckType } from './decks-api'

const SET_DECKS_ACTION = 'SET-DECKS-ACTION'

const initialState = {
  decks: [] as DeckType[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case SET_DECKS_ACTION:
      return { ...state, decks: action.payload.decks }
    default:
      return state
  }
}

export const setDecksAC = (decks: DeckType[]) => ({ type: SET_DECKS_ACTION as const, payload: { decks } })

type DecksActionsACType = ReturnType<typeof setDecksAC>
type DecksActions = DecksActionsACType
