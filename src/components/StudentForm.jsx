import { useEffect } from 'react'

const StudentForm = ({ onSubmit, studentData, setStudentData }) => {
  const onChange = () => {}

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e, studentData)} className='flex flex-col justify-center items-center'>
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
          <button
            className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
            type='submit'
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default StudentForm
