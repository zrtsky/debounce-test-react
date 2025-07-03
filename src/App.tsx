import clsx from 'clsx'
import { useState } from 'react'

import { useDebounce } from '@/hooks'

function App() {
  const [value, setValue] = useState('')
  const { isReady, debouncedValue, cancel } = useDebounce(value, 3000)

  return (
    <div className="flex h-dvh w-full items-center justify-center">
      <div className="flex min-w-md flex-col items-center gap-6">
        <h3 className="w-full text-left text-xl">State:</h3>
        <div className="w-full space-y-2 rounded-lg bg-gray-900 p-4 font-mono">
          <p>Current value - {value || 'NO'}</p>
          <p>Debounced value - {debouncedValue || 'NO'}</p>
          <p>Is Ready - {isReady ? 'YES' : 'NO'}</p>
        </div>
        <input
          type="text"
          placeholder="Type something..."
          name="input"
          className={clsx([
            [
              'w-full',
              'rounded-lg',
              'border',
              'border-gray-400',
              'bg-gray-300',
              'px-4',
              'py-2',
              'font-mono',
              'text-gray-900',
              'ring-gray-600',
              'transition-all',
              'focus:ring-2',
              'focus:outline-0',
            ],
          ])}
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
        />
        <button onClick={cancel} className="w-fit cursor-pointer hover:underline">
          Cancel
        </button>
      </div>
    </div>
  )
}

export default App
