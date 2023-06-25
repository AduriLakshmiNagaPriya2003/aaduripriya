
import React from 'react';

const Train = ({ trainNumber, departureTime, coaches }) => {
  const sortedCoaches = [...coaches].sort((a, b) => a.price - b.price);

  return (
    <div>
      <h3>Train {trainNumber}</h3>
      <p>Departure Time: {departureTime}</p>
      <h4>Coaches:</h4>
      {sortedCoaches.map(coach => (
        <div key={coach.type}>
          <p>{coach.type}</p>
          <p>Seat Availability: {coach.seatAvailability}</p>
          <p>Price: {coach.price}</p>
        </div>
      ))}
    </div>
  );
};

const TrainSchedule = () => {
  const trains = [
    {
      trainNumber: 1,
      departureTime: '10:00 AM',
      coaches: [
        { type: 'Sleeper', seatAvailability: 50, price: 500 },
        { type: 'AC', seatAvailability: 30, price: 1000 }
      ]
    },
    {
      trainNumber: 2,
      departureTime: '12:00 PM',
      coaches: [
        { type: 'AC', seatAvailability: 20, price: 1200 },
        { type: 'Sleeper', seatAvailability: 40, price: 700 }
      ]
    }
  ];

  return (
    <div>
      <h2>Train Schedule</h2>
      {trains.map(train => (
        <Train
          key={train.trainNumber}
          trainNumber={train.trainNumber}
          departureTime={train.departureTime}
          coaches={train.coaches}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <TrainSchedule />
    </div>
  );
};

export default App;