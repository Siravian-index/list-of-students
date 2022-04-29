import StudentItem from './StudentItem'

const StudentList = ({ list, removeStudent }) => {
  return (
    <div className='mt-5'>
      <h2 className='text-xl text-white font-bold text-center'>Student List</h2>
      <ul>
        {list.map((s) => (
          <StudentItem student={s} removeStudent={removeStudent} key={s.id} />
        ))}
      </ul>
    </div>
  )
}

export default StudentList
