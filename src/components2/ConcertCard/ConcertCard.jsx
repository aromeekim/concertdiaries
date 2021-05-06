//import './ConcertCard.css'

export default function concertCard({artist}) {
  return (
    <div className="ConcertCard">
      <div className="flex-ctr-ctr">{artist.concerts.tour}</div>
      <div className="flex-ctr-ctr">{artist.concerts.date}</div>
      <div className="flex-ctr-ctr">{artist.concerts.venue}</div>
      <div className="flex-ctr-ctr">{artist.concerts.city}</div>
      <div className="flex-ctr-ctr">{artist.concerts.rating}</div>
      <div className="flex-ctr-ctr">{artist.concerts.thoughts}</div>
    </div>  
  )
}