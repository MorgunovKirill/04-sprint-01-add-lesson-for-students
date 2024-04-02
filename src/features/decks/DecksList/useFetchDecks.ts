import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { decksSelector } from '../decks-selectors'
import { fetchDecksTC } from '../decks-thunks'

export const useFetchDecks = () => {
    const decks = useAppSelector(decksSelector)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
      dispatch(fetchDecksTC())
    }, [])

    return {
        decks,
    }
}
