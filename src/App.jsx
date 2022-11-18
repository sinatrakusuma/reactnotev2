import React from 'react'
import {
  Link, Navigate, Route, Routes
} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import IndexPage from './pages/main/index'
import NotFoundPages from './pages/pagenotfound/not-found'
import ArchivesPage from './pages/archive/archives'
import IdRecord from './pages/details/details'
import AddNew from './pages/addnew/addNew'
import RecordEdit from './pages/edit/edit'

function App() {
  return (
    <div className="record-wrap">
      <header>
        <h1>
          <Link to="/">xonote</Link>
        </h1>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/archives" element={<ArchivesPage />} />
          <Route path="/records" element={<Navigate to="/" replace />} />
          <Route path="/records/new" element={<AddNew />} />
          <Route path="/records/:id" element={<IdRecord />} />
          <Route path="/records/:id/edit" element={<RecordEdit />} />
          <Route path="*" element={<NotFoundPages />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
