import {useRouter} from "next/router";
import {Fragment} from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import {Allevents, getEventById} from "../../components/data/datafetching";
import Comments from "../../components/input/comments";


function Showevent(props){

    const event=props.event
    if (!event){
        return (
            <p>No event found !</p>
        )
    }
    return(
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
            <Comments eventId={event.id}/>
        </Fragment>
    )
}
export default Showevent
export async function getServerSideProps(context) {

    const id=context.params.id
  const data = await getEventById(id)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
        event:data
    }, // will be passed to the page component as props
  }
}

