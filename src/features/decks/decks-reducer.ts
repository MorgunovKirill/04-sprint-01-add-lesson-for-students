import { DeckType } from './decks-api'

const SET_DECKS_ACTION = 'SET-DECKS-ACTION'
const CREATE_DECK_ACTION = 'CREATE-DECK-ACTION'

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
    case CREATE_DECK_ACTION: 
      return { ...state, decks: [action.payload.deck, ...state.decks] }
    default:
      return state
  }
}

export const setDecksAC = (decks: DeckType[]) => ({ type: SET_DECKS_ACTION, payload: { decks } } as const)
export const createDeckAC = (deck: DeckType) => ({ type: CREATE_DECK_ACTION, payload: { deck } } as const)

type DecksActionsACType = ReturnType<typeof setDecksAC>
type CreateDeckActionsACType = ReturnType<typeof createDeckAC>
type DecksActions = DecksActionsACType | CreateDeckActionsACType
