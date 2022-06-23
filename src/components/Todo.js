// import packages
import React, { useState } from 'react';
import Input from './Input';
import { BiTrash } from 'react-icons/bi'; // packages dari react-icons
import { BiEditAlt } from 'react-icons/bi';
import { MdOutlineDoneOutline } from 'react-icons/md';

// definisikan fungsi di ListItem
const Todo = ({ task, completeTask, removeTask, updateTask, markTask }) => {
  // fungsi edit untuk update
  const [edit, setEdit] = useState({
    id: null, // id tidak dikeluarkan maka nilainya null
    value: '',
  });
  // fungsi untuk submit update
  const submitUpdate = value => {
    updateTask(edit.id, value);
    setEdit({
      id: null, // id tidak dikeluarkan maka nilainya null
      value: ''
    });
  };
  // kembalikan nilai submitUpdate
  if (edit.id) {
    return <Input edit={edit} onSubmit={submitUpdate} />;
  }
  // konfigurasi form
  return task.map((task, index) => ( // arahkan sesuai indeks
    <div
      className={task.isComplete ? 'todo-row complete' : 'todo-row'} // css konfigurasi
      key={index}
    >
      <div key={task.id} onClick={() => completeTask(task.id)}// definisikan key untuk submit dan onClick 
      > 
        {task.text}
      </div>
      <div className='icons'>
        <MdOutlineDoneOutline // penggunaan icons
          onClick={() => markTask(task.id)} // keluarkan nilai mark
        />
        <BiTrash // penggunaan icons
          onClick={() => removeTask(task.id)} // keluarkannilai hapus
        />
        <BiEditAlt // penggunaan icons
          onClick={() => setEdit({ id: task.id, value: task.text })} // keluarkan nilai edit
        />
      </div>
    </div>
  ));
};

export default Todo;

