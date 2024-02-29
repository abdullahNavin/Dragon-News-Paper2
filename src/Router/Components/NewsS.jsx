import React, { useEffect, useState } from 'react';
import News from './News';

const NewsS = () => {
    const [newses, setnewses] = useState([])
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setnewses(data))
    }, [])
    return (
        <div>
            <h1 className='text-2xl font-bold'>Dragon News Home</h1>
            {
                newses.map(news=><News key={news._id} news={news}></News>)
            }
        </div>
    );
};

export default NewsS;