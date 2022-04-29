const StudentItem = ({ student, removeStudent }) => {
  // take the  user data and the callback to delete

  return (
    <div>
      <li>
        {student.firstName} - {student.lastName}
      </li>
      <button onClick={() => removeStudent(student.id)}>delete</button>
    </div>
  )
}

export default StudentItem
