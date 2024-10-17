import { useState, useEffect } from 'react'
import './userSingle.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function UserSingle() {

    const { id } = useParams()
    
    const [user, setUser] = useState([])

    const fetch = async () => {
      try {
          const res = await axios.get(`https://erp.proprint.pro/test.php?id=${id}`)
          setUser(res.data[0])
          console.log(user)

      } catch (error) {
          console.log(error)
      }    
    }
  
  useEffect(() => {
    fetch()
    
  }, [])


  return (
    <div className="users">
        <div className="usersInfo">
            <h1>Страница профиля {id}</h1>
        </div>
        <div className='usersTableContainer'>
        <table className="rtable">
          <thead>
            <tr>
              <th>id</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td>{user.user_id}</td>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                </tr>
          </tbody>
        </table>
      </div>

        {/* <button onClick={()=>setOpenModal(true)}>Добавить</button> */}
      </div>
  )
}
