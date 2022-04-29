import StudentItem from './StudentItem'

const StudentList = ({ list, removeStudent }) => {
  return (
    <div>
      <ul>
        {list.map((s) => (
          <StudentItem student={s} removeStudent={removeStudent} key={s.id} />
        ))}
      </ul>
    </div>
  )
}

export default StudentList
