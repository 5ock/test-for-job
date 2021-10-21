import React from 'react'

import Marquees from './UI/marquees'

const Home = React.memo(() => {
    return (<div>
    <Marquees
        dataList={[
            {
                description: 'Test for job ...........................asdfasdfasdfasdfasdf...........',
                dateTime: '1666059300000'
            },
            {
                description: 'Home',
                dateTime: '1666059500000'
            }
        ]}
    />
    </div>)
})

export default Home