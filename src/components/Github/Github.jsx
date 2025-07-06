import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/TheLearningHead')
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='bg-gray-700 text-white text-3xl p-4 text-center'>
            GitHub Followers: {data.followers}
            <img src={data.avatar_url} alt="GitHub Picture" width={250} className='place-self-center mt-5' />
        </div>
    )
}

export default Github
