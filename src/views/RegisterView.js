import { useState } from "react";
import { useDispatch } from "react-redux";

export default function RegisterWiew() {
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value)
      case 'email':
        return setEmail(value)
      case 'password':
        return setPassword(value)
      default:
        return;
    }
  }
  
  const HandleSubmit = e => {
    e.preventDefault()
    dispatch(authOperations.register({ name, email, password }))
    setName('')
    setPassword('')
    setEmail('')
  }

  return (
    <div>

    </div>
  )
}