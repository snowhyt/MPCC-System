import React from 'react'


  
  

    
const OtherUtilitiesCard = ({items, value}) => {
  let progressColorClass = "";




  if(value < 10){
    progressColorClass="progress-error"
  } else if (value >= 10 && value <=20){
    progressColorClass = "progress-warning"
  } else if (value === 100){
    progressColorClass="progress-success"
  } else {
    progressColorClass="progress-info"

  }

  const progressClasses = `progress w-50 ${progressColorClass}`;


  return(
    <>
    <button id='container' className='group w-[48%] mb-4 text-left py-2 px-3'>
      <ul>
        <li className='leading-none'>
          <h1>{items}</h1>
          <progress className={progressClasses} value={value} max='100'></progress>
          <p>{value}%</p>
        </li>
      </ul>
    </button>
    </>
  )
};

const OtherUtilitiesRadial = ({totalUtilities}) => {

  let progressColorClass = "";

  if(totalUtilities < 10){
    progressColorClass = "text-red-400";
  } else if (totalUtilities >= 10 && totalUtilities <=20){
    progressColorClass = "text-amber-400";
  } else if(totalUtilities === 100){
    progressColorClass = "text-emerald-400";
    } else {
      progressColorClass = "text-sky-400"
    }

    const radialProgressClasses = `radial-progress ${progressColorClass}`


return(
  <>
  <div className={radialProgressClasses} 
  style={{"--value":totalUtilities, 
  "--size":"10rem", "--thickness":"1.5rem"
     }}
   aria-valuenow={totalUtilities}
   role="progressbar"
     
     >
      {totalUtilities}%
  </div>
  </>
)}

function OtherUtilities() {

    return (
  <>
    <div className='flex items-center'>
      <div className='flex flex-wrap justify-between gap-x-6 w-full'>

        <OtherUtilitiesCard items="Hotdog" value={5}/>
        <OtherUtilitiesCard items="Hotdog" value={5}/>
        <OtherUtilitiesCard items="Hotdog" value={5}/>

      </div>



      <div className='mr-20 text-center'>
        <OtherUtilitiesRadial totalUtilities={20}/>
        <h1 className='text-md font-bold pt-5 text-gray-700'>Total Items Stock</h1>
      </div>

    </div>
  </>)
}




export default OtherUtilities