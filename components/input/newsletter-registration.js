import classes from './newsletter-registration.module.css';
import {useRef, useState} from "react";
import CircularIndeterminate from "../loading/loading";
import CustomizedSnackbars from "../ui/successAlert";

function NewsletterRegistration() {
    function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
    const email=useRef()
    const [load,setload]=useState(false)
    const [alert,setAlert]=useState(false)
  function registrationHandler(event) {
        function work(){
            setload(false)
            setAlert(true)
}
    event.preventDefault();
    setload(true)
      const entredEmail=email.current.value
      console.log("Hello");
sleep(2000).then(() => { fetch('/api/newsletter',{
        method:'POST',
        body:JSON.stringify({email:entredEmail}),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((response)=>work()) });


  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={email}
          />
          <button>Register</button>
            <CircularIndeterminate load={load}/>
            <CustomizedSnackbars open={alert} message={'Subscribed !'}/>
        </div>
      </form>

    </section>



  );
}

export default NewsletterRegistration;
