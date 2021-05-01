export async function  Allevents() {

    const res = await fetch('http://localhost:3000/api/getdata/')
    const data = await res.json()
    const events = []
    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        })
    }

    return events
}

export async function getFeaturedEvents() {
    const DUMMY_EVENTS= await Allevents()
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}




export async function getEventById(id) {
    const DUMMY_EVENTS= await Allevents()
  return DUMMY_EVENTS.find((event) => event.id === id);
}



export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const DUMMY_EVENTS= await Allevents()
  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}
