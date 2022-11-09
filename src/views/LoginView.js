import { useState } from "react";
import { useDispatch } from "react-redux";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }))
    setPassword('')
    setEmail('')
  }

  return (
    <div>

    </div>
  )
}