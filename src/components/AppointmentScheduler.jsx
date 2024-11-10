import { useState } from 'react';
import Calendar from 'react-calendar';

const AppointmentScheduler = ({ lawyer }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBookAppointment = () => {
    // Implement booking logic here
    console.log(`Booking appointment with ${lawyer.name} on ${selectedDate.toLocaleDateString()}`);
  };

  return (
    <div className="appointment-scheduler">
      <h3>Book an Appointment with {lawyer.name}</h3>
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>
      <button onClick={handleBookAppointment}>Book Appointment</button>
    </div>
  );
};

export default AppointmentScheduler;
    