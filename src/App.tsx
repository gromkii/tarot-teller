import './App.css'
import MainTable from './components/main-table'

function App() {

  return (
    <>
    <div className='flex flex-col justify-center text-white m-16 h-full'>
      <h1 className='text-6xl mb-8'>Tarot Teller</h1>

      <MainTable />
    </div>
  </>
  )
}

export default App
