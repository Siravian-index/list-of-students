import { useState } from 'react'
import { nanoid } from 'nanoid'

import './App.css'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'

function App() {
  const [studentList, setStudentList] = useState([])
  const [studentData, setStudentData] = useState({ firstName: '', lastName: '' })
  const addStudent = (newStudent) => {
    setStudentList((prev) => [...prev, { ...newStudent, id: nanoid() }])
  }
  const removeStudent = (studentId) => {
    setStudentList((prev) => prev.filter((s) => s.id !== studentId))
  }
  return (
    <div>
      <StudentForm onSubmit={addStudent} setStudentData={setStudentData} studentData={studentData} />
      <StudentList list={studentList} removeStudent={removeStudent} />
    </div>
  )
}

export default App
