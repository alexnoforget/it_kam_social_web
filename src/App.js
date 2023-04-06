import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';
import { DialogsContainer } from './components/Dialogs';
import { UsersContainer } from './components/Users';

import './App.css';

//TODO https://reactrouter.com/en/main/start/tutorial

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/" element={``} />
          <Route
            path="/dialogs"
            element={<DialogsContainer />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/users"
            element={<UsersContainer />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App