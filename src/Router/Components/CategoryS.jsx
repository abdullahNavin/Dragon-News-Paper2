import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryS = () => {
    const [categoris, setCategoris] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategoris(data))
    },[])
    return (
        <div className='p-2 sticky top-2 h-screen'>
            <h1 className='text-2xl font-bold'>All Caterogy</h1>
            <h1 className='bg-gray-300 text-center py-2 text-xl font-bold mt-5 rounded-sm'>National News</h1>
            <div className='ml-[66px]'>
                {
                    categoris.map(categori=> <Link key={categori.id} className='block text-gray-500 font-semibold py-3'>{categori.name}</Link>)
                }
            </div>
        </div>
    );
};

export default CategoryS;