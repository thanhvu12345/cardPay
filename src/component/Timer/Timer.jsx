import React, { useEffect, useState } from 'react';


function formatDate(){
    const date =new Date();

    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    if(hours >12 && hours < 18){
        return "Afternoon:" + " " + `${hours}:${minutes}:${seconds}`;
    }
    if(hours >= 0 && hours < 12){
        return "Morning:" + " " + `${hours}:${minutes}:${seconds}`;
    }
    else{
        return "Night(sleep now!!!):" + " " + `${hours}:${minutes}:${seconds}`;
    } 
}

function Timer() {
    const [timeString,setTimeString ] = useState('');
    useEffect(() =>{
        setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now)
            setTimeString(newTimeString);
        },1000)
    
    
    },[]);
    
    return (
        
        <h1  className='text-[0.8rem] p-1 text-yellow-400'>{timeString}</h1>
      
    );
}

export default Timer;