import { Link } from 'react-router-dom'
import './registration.scss'

export default function Registration() {
    
  return (
    <>
        <form>
            <div className='user-details-registration'>
                <div className='input-box-registration'>
                    <span className='details-registration'>Название проекта</span>
                    <input type='text' placeholder='Название компании'/>
                </div>
                <div className='input-box-registration'>
                    <span className='details-registration'>Почта</span>
                    <input type='text' placeholder='Почта'/>
                </div>
                <div className='input-box-registration'>
                    <span className='details-registration'>Имя</span>
                    <input type='text' placeholder='Имя'/>
                </div>
                <div className='input-box-registration'>
                    <span className='details-registration'>Фамилия</span>
                    <input type='text' placeholder='Фамилия'/>
                </div>
                <div className='input-box-registration'>
                    <span className='details-registration'>Пароль</span>
                    <input type='text' placeholder='Пароль'/>
                </div>
                <div className='input-box-registration'>
                    <span className='details-registration'>Пароль еще раз</span>
                    <input type='text' placeholder='Пароль еще раз'/>
                </div>
            </div>

            <div className='button-registration'>
                <button>Зарегистрироваться</button>
            </div>
        </form>
    </>
  )
}
