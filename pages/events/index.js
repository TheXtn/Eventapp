import EventList from "../../components/events/event-list";

import EventSearch from "../../components/events/event-search";
import {useRouter} from "next/router";
import {Allevents, getFeaturedEvents} from "../../components/data/datafetching";

function Showevents(props){
    const {events}=props

    const router=useRouter()
    function findEventh(year,month){
        const fullPath=`/events/${year}/${month}`;
        router.push(fullPath)
    }
    return(
        <div>
            <EventSearch onSearch={findEventh} />
           <EventList items={events} />
      </div>
    )
}
export default Showevents
export async function getServerSideProps(context) {

  const data = await Allevents()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
        events:data
    },

  }
}
