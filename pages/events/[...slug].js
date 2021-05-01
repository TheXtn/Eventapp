import {useRouter} from "next/router";
import EventList from "../../components/events/event-list";
import Button from "../../components/ui/button";
import LinearProgress from '@material-ui/core/LinearProgress';


import { makeStyles } from '@material-ui/core/styles';
import ShowAlert from "../../components/ui/alert";
import {getFilteredEvents} from "../../components/data/datafetching";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function ShowFiltredevents(props){





    const year=props.year
    const month=props.month
    const filtredevents=props.events
    const readdate=new Date(year,month-1).toLocaleDateString('en-US',{
        month:'long',
        year:'numeric'
    })
    if (!filtredevents || filtredevents.length==0){
        return (

                 <ShowAlert message={'No events in '+readdate}/>


        )
    }

    return(
        <div>
            <h1 align='middle'>
                Events in {readdate}
            </h1>
            <div align='middle'>
                <Button link='/events'>All events</Button>
            </div>
            <EventList items={filtredevents}></EventList>


        </div>
    )
}
export default ShowFiltredevents
export async function getServerSideProps(context){
    const {params}=context
    const data=params.slug
    if(!data){
        sleep(10000)
        return{
            notFound:true,
        }



    }
    const year=+data[0]
    const month=+data[1]
    if (
        isNaN(year) || isNaN(month) || year>2022 || month>12
    ){return{
        notFound:true,
    }

    }
    const filtredevents=await getFilteredEvents({
        year:year,
        month:month
    })

    return{
        props:{
            events:filtredevents,
            year:year,
            month:month,
        }
    }

}