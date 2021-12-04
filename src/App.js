// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import {style} from './css/main.css'

import FormDemo from './components/FormDemo';
import TableUser from './components/TableUser';

function App() {
  const [form, setForm] = useState(
    {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      status: 'Pending',
      bio: '',
      gender: '',
      policy: '',
    }

  );

  const [errors, setErrors] = useState(false);



  const [displayTable, setDisplayTable] = useState('none');


  function handleSubmitForm(e) {
    e.preventDefault();


    if(form.name === '' || form.email === '' || form.password === '' || form.confirmPassword === '') return setErrors(true)

    setErrors(false);
    
    setDisplayTable('block');
  }
  
    
  console.log('please form???: ', form)



  return (
    <div className="App">
      <div className="container">
        <h2 style={{color: '#fff', backgroundColor: '#000', marginBottom: 0, padding: '12px'}}>Form Register</h2>
        
        <FormDemo form={form} setForm={setForm} errors={errors} setErrors={setErrors} handleSubmitForm={handleSubmitForm} />

        <TableUser form={form} displayTable={displayTable} />
        
      </div>

      {/* củ chuối */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
