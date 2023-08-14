import React, {useState} from 'react';
import "./Pages.css"

const Pages = ({ onSelectDate }) => {
  const handleDateClick = (date) => {
    onSelectDate(date);
  };

  // const [cards] = useState([
  //   {
  //   title: 'card-1',
  //   text: 'lorem ipsum'
  //   },
  //   {
  //     title: 'card-2',
  //     text: 'lorem ipsum'
  //   },
  //   {
  //     title: 'card-3',
  //     text: 'lorem ipsum'
  //   },
  //   {
  //     title: 'card-4',
  //     text: 'lorem ipsum'
  //   }
    
  // ])

  return (
    <div>
        <div className="text">
            <h1>All Events</h1>
            Browse all ongoing and upcoming events on J4D!
        </div>

        <section>
          <div className="card">
          
            <div className="card1"><b>Date</b></div>
            <div className="card2"><b>Language</b></div>
            <div className="card3">Categories</div>
            <div className="card4">More Filters</div>
            </div>

            
              
            
          
        </section>
      <div className="upperbox">
      <button  onClick={() => handleDateClick('Training')}>Training</button>
      <button onClick={() => handleDateClick('Coding Contest')}>Coding Contest</button>
      <button onClick={() => handleDateClick('AI/ML')}>AI/ML</button>
      <button onClick={() => handleDateClick('This Weekend')}>This Weekend</button>
      <button onClick={() => handleDateClick('Meetups')}>Meetups</button>
      </div>

      <div className="container">
       
          
      </div>
    </div>
  );
};

export default Pages;

/*<div className="cards">
              {
                /*cards.map((card,i)=> (
                  <div key= {i} className="card">
                  <h3>
                    { card.title }
                  </h3>
                  <p>
                    {card.text}
                  </p>
                </div>
                ))
                <div className="card1">
                  hello
                  </div>

                 
              }*/

