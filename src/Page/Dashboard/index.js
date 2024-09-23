import React, {useState} from 'react'
import Swal from 'sweetalert2'

import Header from './Header'
import List from './List'
import Add from './Add'
import Edit from './Edit'

import { employeesData } from '../../data'

function Dashboard() {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const [employee] = employees.filter(employee => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  }

  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you Sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: "No, Cancel!"
    }).then(result => {
      if (result.value) {
        const [employee] = employees.filter(employee => employee.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 2000
        })

        setEmployees(employees.filter(employee => employee.id !== id));
      }
    })
  }

  return (
    <div className='container'>
      {/* This is for List */}
      {!isAdding && !isEditing && (
        <>
          <Header 
            setIsAdding ={setIsAdding} 
          />
        <List 
          employees={employees}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        </>
      )}
      {/* This is for Add */}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {/* This is for Edit */}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  )
}

export default Dashboard