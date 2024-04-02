import { Dispatch } from 'redux'
import { AddNewDeckParams, decksApi } from './decks-api'
import { createDeckAC, setDecksAC } from './decks-reducer'

export const fetchDecksTC = () => {
    return (dispatch: Dispatch) => {
      decksApi.fetchDecks().then((res) => {
        dispatch(setDecksAC(res.data.items))
      })
    }
}

export const createDeckTC = (formValues: AddNewDeckParams) => {
    return (dispatch: Dispatch) => {
        decksApi.createDeck(formValues).then((res) => {
            dispatch(createDeckAC(res.data))
        })
    }
}

