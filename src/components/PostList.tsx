import { Show, For, createSignal } from 'solid-js'
import { supabase } from '../lib/supabase'
import { type Post } from '../env.d'

const { data, error } = await supabase
  .from('posts')
  .select('*, users(name, user_name, avatar_url)')

console.log(data, error)

export default function PostList () {
  return (

      <Show
        when={data != null && data.length > 0}
        fallback={<p class="text-center py-8">There are no posts</p>}
      >
        <For each={data}>{(post: Post) => <>{<Card post={post} />} </>}</For>
      </Show>

  )
}

function Card (props: { post: Post }) {
  const [count, setCount] = createSignal(0)
  const [likes, setLikes] = createSignal(0)
  const [reply, setReply] = createSignal(0)

  const increaseCounter = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const increaseLikes = () => {
    setLikes((prevLikes) => prevLikes + 1)
  }

  const increaseReply = () => {
    setReply((prevReply) => prevReply + 1)
  }

  return (
    <>
      <div class="flex items-start gap-2.5 w-96">
        <img
          class="w-8 h-8 rounded-full"
          src={props.post.users.avatar_url}
          alt="{userName}"
        />
        <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
          <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">
              {props.post.users.name}
            </span>
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
              @{props.post.users.user_name}
            </span>
          </div>
          <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            {props.post.content}
          </p>

          <span class="flex flew-row gap-3 text-gray-500 dark:text-gray-400">
            <div class='flex flex-row items-center gap-1 cursor-pointer' onClick={increaseCounter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-message-circle-2"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"></path>
            </svg>
            {count()}
            </div>
            <div class='flex flex-row items-center gap-1 cursor-pointer' onClick={increaseLikes}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-heart"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
            </svg>
            {likes()}
               </div>
               <div class='flex flex-row items-center gap-1 cursor-pointer' onClick={increaseReply}>
               <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-repeat"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
              <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
            </svg>

            {reply()}

                  </div>

          </span>
        </div>
      </div>
    </>
  )
}
