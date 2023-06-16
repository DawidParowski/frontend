import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'Mountains',
    image:
      'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: 'Glacier National Park, Flathead County, Montana, US',
  },
  {
    id: 'm2',
    title: 'Lake',
    image:
      'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: '622 Moraine Lake Rd, Field, AB, Kanada',
  },
  {
    id: 'm3',
    title: 'Tree',
    image:
      'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: 'Jezioro Gwiazdy, Pojezierze Bytowskie, Poland',
  },
  {
    id: 'm4',
    title: 'Cliff',
    image:
      'https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: 'Location unknown',
  },
  {
    id: 'm5',
    title: 'Isle',
    image:
      'https://images.pexels.com/photos/163891/italy-sicily-sea-ocean-163891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: 'Cyclopean Isles, Sycily, Italy',
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;