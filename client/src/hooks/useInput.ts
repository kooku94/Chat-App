import { useState, ChangeEvent, KeyboardEvent } from 'react'

export default function useInput(defaultValue: string, requestFunc: Function) {
  const [value, setValue] = useState(defaultValue)

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => setValue(target.value)
  const onKeyDown = ({ keyCode }: KeyboardEvent) => {
    if (keyCode === 13) requestFunc(value)
  }
  return { value, onChange, onKeyDown }
}
