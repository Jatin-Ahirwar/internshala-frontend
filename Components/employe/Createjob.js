// "use client"
// import "@/app/css/createopportunity.css"
// import React from 'react'

// const Createinternship = () => {
//   return <>
//     <div className='createopportunity'>
//         <div>
//             <h5>Job details</h5>
//             <div className="creatediv">
//                 <form className='opwrapper'>
//                     <div className='opitemdiv'>
//                     <label>Job title</label>
//                     <input onChange={(e)=>setfirstname(e.target.value)}  required type="text" name='firstname' placeholder='First name' />
//                     </div>
//                 </form>
//                 {/* <p>Internship profile</p>
//                 <input  type="text" placeholder="e.g. Andriod  App Development" /> */}
//             </div>
//         </div>
//     </div>
//     </>
// }

// export default Createinternship

// components/Createinternship.js

"use client"
// components/Createinternship.js

import { useState } from 'react';

const Createinternship = () => {
  const [selectedOption, setSelectedOption] = useState('office');

  const officeLabelStyle = {
    color: selectedOption === 'office' ? 'blue' : 'black',
  };

  const remoteLabelStyle = {
    color: selectedOption === 'remote' ? 'red' : 'black',
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <label style={officeLabelStyle}>
        <input
          type="checkbox"
          checked={selectedOption === 'office'}
          onChange={() => handleOptionChange('office')}
        />
        In Office
      </label>

      <label style={remoteLabelStyle}>
        <input
          type="checkbox"
          checked={selectedOption === 'remote'}
          onChange={() => handleOptionChange('remote')}
        />
        Remote
      </label>

      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default Createinternship;
