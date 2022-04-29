import StudentItem from './StudentItem'

const StudentList = ({ list, removeStudent }) => {
  return (
    <div className='bg-orange-700'>
      <ul>
        {list.map((s) => (
          <StudentItem student={s} removeStudent={removeStudent} key={s.id} />
        ))}
      </ul>
    </div>
  )
}

export default StudentList
