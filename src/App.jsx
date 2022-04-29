import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import './index.css'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'

function App() {
  const [studentList, setStudentList] = useState([])
  const [studentData, setStudentData] = useState({ firstName: '', lastName: '' })
  useEffect(() => {
    console.log(studentList)
    console.log(nanoid())
  }, [studentList])

  const addStudent = (e, newStudent) => {
    e.preventDefault()
    if (newStudent.firstName && newStudent.lastName) {
      setStudentList((prev) => [...prev, { ...newStudent, id: nanoid() }])
      setStudentData({ firstName: '', lastName: '' })
    }
  }
  const removeStudent = (studentId) => {
    setStudentList((prev) => prev.filter((s) => s.id !== studentId))
  }
  return (
    <>
      {/* <div className='flex justify-around mt-5'> */}
      <div className='flex flex-col md:flex-row justify-around mt-5'>
        <StudentForm onSubmit={addStudent} setStudentData={setStudentData} studentData={studentData} />
        <StudentList list={studentList} removeStudent={removeStudent} />
      </div>
    </>
  )
}

export default App
