
import EventList from "../components/events/event-list";
import ShowAlert from "../components/ui/alert";
import {Allevents,getFeaturedEvents } from "../components/data/datafetching";
import NewsletterRegistration from "../components/input/newsletter-registration";
function Homepage(props){


  const {events}=props
    return(
        <div>
            <NewsletterRegistration />
           <EventList items={events} />

        </div>

    )
}
export default Homepage
export async function getServerSideProps(context) {

  const data = await getFeaturedEvents()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
        events:data
    }, // will be passed to the page component as props
  }
}
