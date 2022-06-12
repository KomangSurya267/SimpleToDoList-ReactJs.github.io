import React, { useState, useEffect, useRef } from 'react';
// useEffect untuk menambahkan callback dan sebuah variabel dalam array.
// useRef untuk mengakses objek tertentu

function Input(props) { //simpan variabel dalam argumen atau props
  const [input, setInput] = useState(props.edit ? props.edit.value : ''); // argumen input dalam editTask

  const inputRef = useRef(null); // definisikan inputRef, useRef tidak muncul maka bernilai null

  useEffect(() => {
    inputRef.current.focus(); // fokus mengakses inputRef
  });

  const handleChange = e => { // controlled component form, masukan variabel baru 
    setInput(e.target.value);
  };

  const handleSubmit = e => { // controlled component form
    e.preventDefault();

    props.onSubmit({ // pilih argumen onSubmit
      id: Math.floor(Math.random() * 10000), // mengembalikan nilai acak dari rentang variabel
      text: input
    });
    setInput('');
  };
  // konfigurasi form
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange} // controlled component form
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Ketik disini ...'
            value={input}
            onChange={handleChange} // controlled component form
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button' // class css
          > 
            Tambahkan 
          </button>
        </>
      )}
    </form>
  );
}

export default Input;
