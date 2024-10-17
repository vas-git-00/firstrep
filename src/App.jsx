import './styles/global.scss'
import { Routes, Route, Outlet  } from 'react-router-dom'
import useAuthStore from './store/store'
import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Users from './pages/users/users/Users'
import Auth from './pages/auth/Auth'
import Groups from './pages/groups/Groups'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import UserSingle from './pages/users/userSingle/UserSingle'
import Chats from './pages/chats/Chats'

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  const Layout = () => {
    return (
      <div className='main'>
        <Navbar />
          <div className='container'>
            <div className='menuContainer'>
              <Menu />
            </div>
            <div className='contentContainer'>
              <Outlet />
            </div>
          </div>
        <Footer />
      </div>
    )
  }
   //<Route path="*" element={<PageNotFound/>} />
  return (
      <Routes>
        {!isAuthenticated 
          ? 
        <Route path='/auth' element={<Auth />} />
          :
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path='chats' element={<Chats />} />

          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<UserSingle />} />
          
          <Route path='groups' element={<Groups />} />

          <Route path="*" element={<PageNotFound/>} />
        </Route>
        }
      </Routes>

  );

}

export default App
