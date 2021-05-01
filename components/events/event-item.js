import Link from "next/link";
import classes from './event-item.module.css'
import Button from "../ui/button";
function EventItem(props){
    const {title,image,date,location,id}=props
    const readdate=new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })
    const addr=location.replace(', ','\n')
    const explorelink=`/events/${id}`;
    return(
         <li className={classes.item}>
             <img src={'/'+image} alt={title} />
             <div className={classes.content}>
                 <div className={classes.summary}>
                     <h2>{title}</h2>
                     <div className={classes.date}>
                         <time>{readdate}</time>
                     </div>
                     <div className={classes.address}>
                         <address>{addr}</address>
                     </div>
                 </div>
                 <div className={classes.actions}>
                        <Button link={explorelink}>Explore Event</Button>
                 </div>
             </div>

         </li>
    )
}
export default EventItem