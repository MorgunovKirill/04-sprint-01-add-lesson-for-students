import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksApi } from '../decks-api'
import { setDecksAC } from '../decks-reducer'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { decksSelector } from '../decks-selectors'
import { DeckItem } from './DeckItem/DeckItem'

export const DecksList = () => {
  const decks = useAppSelector(decksSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    decksApi.getDecks().then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
  }, [])

  return (
    <ul className={s.list}>
      {decks.map((deck) => {
        return <DeckItem key={deck.id} deck={deck} />
      })}
    </ul>
  )
}
