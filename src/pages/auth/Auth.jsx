import './auth.scss'
import { useState } from 'react'
import Registration from '../../components/auth/registration/Registration'
import Login from '../../components/auth/login/Login'

export default function Auth() {
  const [logreg, setLogreg] = useState(false)

  return (
    <div className="authContainer">
      <div className='form-container-auth'>
        <div className='title-auth'>
          ChatsHub | {logreg ? 'Регистрация' : 'Авторизация'}
        </div>
        {logreg ? <Registration /> : <Login /> }
        <div className='footer-auth'>
          {logreg ? ' Уже есть аккаунт в ChatsHub? ' : ' Нет аккаунта в ChatsHub?'}
            <span className='change-auth' onClick={() => setLogreg(!logreg)}>
              {logreg ? ' Авторизация' : ' Регистрация'}
            </span>
        </div>
      </div>
    </div>
  )
}
