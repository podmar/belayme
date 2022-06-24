import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

function List() {
    const [belayers, setBelayers] = useState([]);
    const [belayerCount, setBelayerCount] = useState([0]);
    
    //TODO change this to get user by location based on current location
    const url = "http://localhost:5001/users/all"

    const fetchBelayers = async () => {
        try {
            const response = await fetch(url);
            const belayersData = await response.json();
            console.log(belayersData);
            setBelayers(belayersData.allUsers);
            setBelayerCount(belayersData.results);
            // console.log(belayers, belayerCount);
        } catch (error) {
            console.log("cannot fetch belayers", error);
        }
    };

    useEffect(() => {
      fetchBelayers()
    }, [])
    
  return (
    <div>
        <Typography variant='h2'>
            Climbers nearby
        </Typography>
        {belayerCount ? 
            <p>{`Found ${belayerCount} people nearby you.`}</p> :
            <p>Looking for people nearby...</p>
        }
        

    </div>
  )
}

export default List