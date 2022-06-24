import React, { useEffect, useState } from 'react'

function List() {
    const [belayers, setBelayers] = useState([]);
    
    //TODO change this to get user by location based on current location
    const url = "http://localhost:5001/users/all"

    const fetchBelayers = async () => {
        try {
            const response = await fetch(url);
            const belayersData = await response.json();
            console.log(belayersData)
            // setBelayers()
            
        } catch (error) {
            console.log("cannot fetch belayers", error);
        }
    };

    useEffect(() => {
      fetchBelayers()
    }, [])
    
  return (
    <div>List</div>
  )
}

export default List