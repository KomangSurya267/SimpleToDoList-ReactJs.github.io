// import packages
import React, { useState } from 'react';
import Input from './Input';
import Todo from './Todo';

// buat fungsi ListItem, sebelumnya di definisikan nilai variabel cons, yang nanti disimpen di useState
function ListItem() {
  
    const [tasks, setTasks] = useState([]);
    // definisikan varibel add dengan task
    const addTask = task => {
      if (!task.text || /^\s*$/.test(task.text)) {  // Menemukan baris kosong menggunakan metacharacter 
        return;
      }
      // definisikan newTask biar updateTask berfungsi 
      const newTask = [task, ...tasks];
      //keluarkan nilai newTask
      setTasks(newTask);
      console.log(...tasks);
    };
    // definisikan variabel add dengan id dan newValue
    const updateTask = (taskId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) { // Menemukan baris kosong menggunakan metacharacter 
        return; 
      }
      // atur setTask dan arahkan dengan id dan keluarkan nilainya
      setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)));
    };
    // definisikan variabel remove dengan id
    const removeTask = id => {
      const removedArr = [...tasks].filter(task => task.id !== id); //hapus nilai tasks dari id
  
      setTasks(removedArr);
    };
    // definisikan variabel update dengan id yang akan di update
    const completeTask = id => {
      let updatedTask = tasks.map(task => {
        if (task.id === id) {
          task.isComplete = !task.isComplete;
        }
        return task;
      });
      setTasks(updatedTask); //keluarkan nilai yang terupdate
    };
    // konfigurasi form
    return (
      <>
        <h1><center>Apa rencanamu hari ini?</center></h1>
        <Input onSubmit={addTask} />
        <Todo
          task={tasks}
          completeTask={completeTask}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      </>
    );
  }
  
  export default ListItem;