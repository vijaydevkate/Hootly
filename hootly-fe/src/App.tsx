import './App.css'
import { Navbar } from './components/Navbar'
import { Logo } from './components/Logo'
function App() {
  
  return (
    <>
    <div className='h-25 w-full rounded-full flex items-center bg-slate-100 px-3'>
      <div className='w-70 h-70 flex items-center justify-center '>
        <Logo/>
      </div>
       <Navbar/>
    </div>
    </>
   
  )
}

export default App
