import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Swal from 'sweetalert2'
import 'animate.css';
import Header from './components/Header'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  const notify = () => {
    Swal.fire({
      title: 'Success!',
      text: 'Do you want to continue',
      icon: 'success',
      confirmButtonText: 'Cool',
      showClass: {
        popup: `
          animate__animated
          animate__rotateInDownRight
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    })
  }

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='animate__animated animate__rotateIn animate__slower	animate__infinite	infinite  text-6xl font-semibold'>Mustafizur Rahman</h1>
      <div className="card">
        <button className=' btn btn-secondary' onClick={() => notify()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
