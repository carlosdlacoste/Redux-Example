import './App.css'
import { useEffect } from 'react'
import { useDispatch} from 'react-redux'
// import { addUser } from './redux/userSlice'
import { getUser } from './redux/userSlice'
import { Header } from "./components/header"
import { Email } from "./components/email"

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users/1")
    //   .then((resp) => resp.json())
    //   .then((data) => dispatch(addUser(data)))
    //   .catch((error) => console.log(error))
    
    dispatch(getUser())

  }, [])

  return (
    <>
      <Header/>
      <Email/>
    </>
  )
}

export default App
