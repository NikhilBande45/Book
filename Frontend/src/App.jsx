
import Signup from './components/Signup'
import {Navigate, Route,Routes} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import AddBook from './components/AddBook'
import UpdateBookInfo from './components/UpdateBookInfo'
import Navbar from './components/Navbar'
import Course from './components/Course'
import Banner from './components/Banner'
import SearchBook from './components/SearchBook'


function App() {
  
  const [authUser , setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Banner/>} />
          <Route path="/books" element={authUser ? <Course/> : <Navigate to='/signup'/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/addbook" element={authUser ? <AddBook/> : <Navigate to='/signup'/>}/>
          <Route path="/update/:id" element={<UpdateBookInfo />} />
          <Route path="/search" element={authUser ? <SearchBook/> : <Navigate to='/signup'/>} />
        </Routes>
        <Toaster/>
      </div>
    </>
  )
}

export default App
