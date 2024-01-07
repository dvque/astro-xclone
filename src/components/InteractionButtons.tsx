import type { Accessor } from 'solid-js'

interface CounterProps {
  count: Accessor<number>
  increaseCounter: () => void
}

export default function Counter (props: CounterProps) {
  return (
    <div class="flex justify-center items-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={props.increaseCounter}
      >
        Increase
      </button>
      <p class="text-center py-8">{props.count()}</p>
    </div>
  )
}
