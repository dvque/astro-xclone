import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData()
  const content = formData.get('content')?.toString()
}
