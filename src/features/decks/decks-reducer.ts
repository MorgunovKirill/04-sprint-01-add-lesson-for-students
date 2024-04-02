import { Dispatch } from 'redux'
import { DeckType, decksApi } from './decks-api'

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

export const setDecksAC = (decks: DeckType[]) => ({ type: SET_DECKS_ACTION, payload: { decks } } as const)

export const fetchDecksTC = () => {
  return (dispatch: Dispatch) => {
    decksApi.fetchDecks().then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
  }
}

type DecksActionsACType = ReturnType<typeof setDecksAC>
type DecksActions = DecksActionsACType
