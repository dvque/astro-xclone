import type { APIRoute } from 'astro'
import { supabase } from '../../../lib/supabase'

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData()
  const content = formData.get('content')?.toString()

  if (content == null) {
    return new Response('Content is required', { status: 400 })
  }

  const { data: { user }, error } = await supabase.auth.getUser()

  if (user == null) {
    return new Response('User not found', { status: 404 })
  }

  // console.log('INSERT', { content, user_id: user.id })

  const test = await supabase.from('posts').insert({ content, user_id: user.id })

  // console.log('INSERT', test)

  return redirect('/')
}
