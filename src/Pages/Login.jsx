import React, { useState }  from "react";
import Formclasss from '../PagesCss/Login/Login.module.css'
const Login = () => {
  const [Sign, setSign] = useState(true)

  return (
    <div className={Formclasss.form_container}>
      <form className={Formclasss.form}>
        <p className={Formclasss.form_title}> {Sign ? <>Sign up</> : <>Create Acount</>} </p>

        {Sign ? <>
          <input className={Formclasss.form_input} type="text" name='Email' placeholder='Enter Your Email' />
          <input className={Formclasss.form_input} type="password" name='Password' placeholder='Enter Your Password' />
        </>
          :
          <>
            <input className={Formclasss.form_input} type="text" name='useName' placeholder='Enter Your Name' />
            <input className={Formclasss.form_input} type="text" name='Email' placeholder='Enter Your Email' />
            <input className={Formclasss.form_input} type="password" name='Password' placeholder='Enter Your Password' />
            <input className={Formclasss.form_input} type="password" name='Password' placeholder='Confirm Password' />
          </>

        }
        <span className={Formclasss.form_btn} >{Sign ? <>Sign up</> : <>Create Acount</>}</span>
        {Sign ?

          <>
            <p className={Formclasss.form_link}> create acount? <span className={Formclasss.form_click_here} onClick={() => setSign(!Sign)}>Click here!</span></p>

          </>
          :
          <>
            <p className={Formclasss.form_link}> already have an create acount? <span className={Formclasss.form_click_here} onClick={() => setSign(!Sign)}>Sign up!</span></p>

          </>}
      </form>
    </div>
  );
}

export default Login;
