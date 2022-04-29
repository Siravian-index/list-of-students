const StudentForm = ({ onSubmit, studentData, setStudentData }) => {
  return (
    <div className='w-full max-w-xs'>
      <form onSubmit={(e) => onSubmit(e, studentData)} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl text-gray-700 font-bold text-center'>Student Form</h2>
        <div className='mb-4'>
          <label htmlFor='firstName' className='block text-gray-700 text-sm font-bold mb-2'>
            First name
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username'
              type='text'
              onChange={(e) => setStudentData({ ...studentData, firstName: e.currentTarget.value })}
              value={studentData.firstName}
            />
          </label>
        </div>
        <div className='mb-6'>
          <label htmlFor='lastName' className='block text-gray-700 text-sm font-bold mb-2'>
            Last name
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              onChange={(e) => setStudentData({ ...studentData, lastName: e.currentTarget.value })}
              value={studentData.lastName}
            />
          </label>
        </div>
        <div>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
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
