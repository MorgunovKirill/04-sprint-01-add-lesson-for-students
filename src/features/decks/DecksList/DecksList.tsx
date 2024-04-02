import s from './DecksList.module.css'
import {useEffect} from "react";
import {decksApi} from "../decks-api";

export const DecksList = () => {
  useEffect(() => {
    decksApi.getDecks()
  }, [])
  return <ul className={s.list}></ul>
}
