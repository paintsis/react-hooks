import {useReducer} from 'react'

export const TodoApp = () => {
    const [state, dispatch] = useReducer(first, second, third)

  return (
    <>
        <h1>TodoApp</h1>
        <hr />
        <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>

        </ul>
    </>
  )
}
