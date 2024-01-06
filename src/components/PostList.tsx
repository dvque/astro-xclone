import { Show } from 'solid-js'

export default function PostList () {
  return (
        <Show
        when={posts.length > 0}
        fallback={<p class="text-center py-8">There are no posts</p>}
        >
            <p>Some posts are retriven</p>
        </Show>

  )
}
