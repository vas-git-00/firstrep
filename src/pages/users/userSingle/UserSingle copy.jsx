import './userSingle.scss'

export default function UserSingle() {
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
              <th>Имя Фамилия</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.user_id}</td>
                  <td>{user.name}</td>
                  <td>
                    <div className='usersActions'>
                      <div className='usersActionsItem'>
                        <span className='usersActionsEdit'><MdOutlineEditNote size='20px'/></span>
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
