import { useState } from 'react'
import './groups.scss'
import AddGroup from '../../components/addModal/AddGroup'
import { MdOutlineEditNote, MdDeleteOutline } from "react-icons/md"

export default function Groups() {

  const [openModal, setOpenModal] = useState(false)

 
  return (
    <div className="groups">
      <div className="groupsInfo">
        <h1>Группы</h1>
        <button onClick={()=>setOpenModal(true)}>Добавить</button>
      </div>
      <div className='groupsTableContainer'>
        <table className="rtable">
          <thead>
            <tr>
              <th>id</th>
              <th>Название группы</th>
              <th>Дата создания</th>
              <th>Дата изменения</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Отдел продаж</td>
              <td>08.10.2024</td>
              <td>08.10.2024</td>
              <td>
                <div className='groupsActions'>
                  <div className='groupsActionsItem'>
                    <span className='groupsActionsEdit'><MdOutlineEditNote size='20px'/></span>
                  </div>
                  <div className='groupsActionsItem'>
                    <span className='groupsActionsDelete'><MdDeleteOutline size='18px'/></span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {openModal && <AddGroup slug="новой группы" setOpenModal={setOpenModal} />}
  
    </div>
  )
}



