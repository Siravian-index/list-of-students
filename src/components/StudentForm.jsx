import { useEffect } from 'react'

const StudentForm = ({ onSubmit, studentData, setStudentData }) => {
  const onChange = () => {}

  return (
    <form onSubmit={(e) => onSubmit(e, studentData)}>
      <div>
        <label htmlFor='firstName'>
          <input
            type='text'
            onChange={(e) => setStudentData({ ...studentData, firstName: e.currentTarget.value })}
            value={studentData.firstName}
          />
        </label>
      </div>
      <div>
        <label htmlFor='lastName'>
          <input
            type='text'
            onChange={(e) => setStudentData({ ...studentData, lastName: e.currentTarget.value })}
            value={studentData.lastName}
          />
        </label>
      </div>
      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  )
}

export default StudentForm
