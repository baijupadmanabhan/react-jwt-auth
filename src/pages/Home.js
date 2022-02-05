import React from 'react';

const Home = ({name }) => {

    
    console.log("Name in home")
    console.log({name})


    return ( 
        <div>
            {name ? 'Hi ' + name : 'You are not logged in...'}
        </div>
     );
}

export default Home;