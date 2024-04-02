import { DeckType } from './decks-api'
import { AppRootState } from '../../app/store'

export const decksSelector = (state: AppRootState): Array<DeckType> => state.decksReducer.decks
