import { createStore } from 'solid-js/store'
import { createEffect } from 'solid-js'
import { type Database } from '../types/database'

type Posts = Database['public']['Tables']['posts']['Row']

const LOCAL_STORAGE_KEY = 'cart'
const stored: string | null = localStorage.getItem(LOCAL_STORAGE_KEY)
const parsed: Posts[] = (stored != null) ? JSON.parse(stored) : []

export const [board, setBoard] = createStore<Posts[]>(parsed ?? [])

createEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(board))
})
