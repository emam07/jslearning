import React from 'react'

const Usercard = ({Title,Content}) => {
    //console.log(props);
    return (
        <div className='card'>
                <h1>{Title}</h1>
                <p>{Content}</p>
              </div>
    )
}

export default Usercard;
 