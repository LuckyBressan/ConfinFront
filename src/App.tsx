
import Header from './components/Header'
import Router from './router'

import './assets/css/App.css'

function App() {

  return (
    <>
      <Header></Header>
      <main className='w-full h-full justify-center items-center flex flex-col'>
        <Router />
      </main>
    </>
  )
}

export default App
