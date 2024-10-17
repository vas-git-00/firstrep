import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './users.scss'
import AddUser from '../../../components/addModal/AddUser'
import axios from 'axios'
import { MdOutlineEditNote, MdDeleteOutline } from "react-icons/md"

export default function Users() {

  const [openModal, setOpenModal] = useState(false)
  const [users, setUsers] = useState([])

  const fetch = async () => {
    try {
        const res = await axios.get("https://erp.proprint.pro/test.php")
        setUsers(res.data)

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
        <h1>Пользователи</h1>
        <button onClick={()=>setOpenModal(true)}>Добавить</button>
      </div>
      <div className='usersTableContainer'>
        <table className="rtable">
          <thead>
            <tr>
              <th>id</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Email</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.user_id}>
                  <td>{user.user_id}</td>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className='usersActions'>
                      <div className='usersActionsItem'>
                        <span className='usersActionsEdit'>
                          <Link to={user.user_id}>
                            <MdOutlineEditNote size='20px'/>
                          </Link>
                        </span>
                      </div>
                      <div className='usersActionsItem'>
                        <span className='usersActionsDelete'><MdDeleteOutline size='18px'/></span>
                      </div>
                    </div>
                  </td>
                </tr>
            )})}
          </tbody>
        </table>
      </div>

      {openModal && <AddUser slug="нового пользователя" setOpenModal={setOpenModal} />}
  
    </div>
  )
}



