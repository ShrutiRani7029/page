import React, { useState } from 'react';
import Pages from './Pages/Pages';

const App = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
    
      <Pages onSelectDate={handleDateSelection} />
      {selectedDate && <p>You selected: {selectedDate}</p>}
    </div>
  );
};

export default App;




