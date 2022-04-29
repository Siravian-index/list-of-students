const StudentItem = ({ student, removeStudent }) => {
  return (
    <div className='w-full bg-white rounded-lg shadow-lg p-5 m-3 flex justify-between'>
      <li className=''>{`${student.firstName} ${student.lastName}`}</li>
      <button
        className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 mx-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
        onClick={() => removeStudent(student.id)}
      >
        X
      </button>
    </div>
  )
}

export default StudentItem
