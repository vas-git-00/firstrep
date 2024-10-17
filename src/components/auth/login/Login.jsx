import './login.scss'

export default function Login() {
  return (
    <>
    <form>
        <div className='user-details-registration'>
            <div className='input-box-registration'>
                <span className='details-registration'>Почта</span>
                <input type='text' placeholder='Почта'/>
            </div>
            <div className='input-box-registration'>
                <span className='details-registration'>Пароль</span>
                <input type='text' placeholder='Пароль'/>
            </div>
        </div>

        <div className='button-registration'>
            <button>Авторизоваться</button>
        </div>
    </form>
</>
  )
}
