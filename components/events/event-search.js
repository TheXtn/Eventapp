import Button from "../ui/button";
import classes from './events-search.module.css'
import {useRef,useState} from 'react'
import {route} from "next/dist/next-server/server/router";
import {useRouter} from "next/router";

function EventSearch(props){
    const router=useRouter()
    const [year,setyear]=useState("")
    const [month,setmonth]=useState("")
    const hyear=(event)=>{
        setyear(event.target.value)

    }
    const hmonth=(event)=>{

        setmonth(event.target.value)
    }
    const hsubmit=(event)=>{
        event.preventDefault()
        const fullPath=`/events/${year}/${month}`;
        router.push(fullPath)
    }
    return(
        <form className={classes.form} onSubmit={hsubmit}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='year'>Year</label>
                    <select id='year' value={year} onChange={hyear}>
                        <option>Select year</option>
                        <option value='2021'>2021</option>
                        <option value='2022'>2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <select id='month' value={month} onChange={hmonth}>
                        <option>Select month</option>
                        <option value='1'>January</option>
                     <option value='2'>February</option>
                     <option value='3'>March</option>
                     <option value='4'>April</option>
                     <option value='5'>May</option>
                     <option value='6'>June</option>
                     <option value='7'>August</option>
                     <option value='8'>September</option>
                     <option value='9'>September</option>
                     <option value='10'>October</option>
                     <option value='11'>November</option>
                     <option value='12'>December</option>
                    </select>




                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    )
}
export default EventSearch