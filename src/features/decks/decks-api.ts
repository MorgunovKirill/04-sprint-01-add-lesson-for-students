import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es/',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  fetchDecks() {
    return instance.get<GetDecksResponseType>('v2/decks')
  },
  createDeck(params: AddNewDeckParams) {
    return instance.post<DeckType>('v1/decks', params)
  }
}

export type AddNewDeckParams = {
  name: string
}
export type GetDecksResponseType = {
  items: DeckType[]
  pagination: PaginationType
}
export type AuthorType = {
  id: string
  name: string
}
export type DeckType = {
  author: AuthorType
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}
export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
