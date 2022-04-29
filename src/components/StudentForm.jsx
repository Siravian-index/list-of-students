import { useEffect } from 'react'

const StudentForm = ({ onSubmit, studentData, setStudentData }) => {
  useEffect(() => {
    console.log(studentData)
  }, [studentData])
  return (
    <form onSubmit={() => onSubmit}>
      <div>
        <label htmlFor='firstName'>
          <input type='text' onChange={(e) => setStudentData({ ...studentData, firstName: e.currentTarget.value })} />
        </label>
      </div>
      <div>
        <label htmlFor='lastName'>
          <input type='text' onChange={(e) => setStudentData({ ...studentData, lastName: e.currentTarget.value })} />
        </label>
      </div>
      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  )
}

export default StudentForm
