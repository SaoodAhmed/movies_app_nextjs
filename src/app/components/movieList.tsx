import React from 'react';

type MoviesDataType = {
    id: number;
    name: string;
    imgSrc: string;
    category: string;
    link: string;
}

const MovieList: React.FC<{ data: MoviesDataType[] }> = ({ data }) => {
    return (
        <div className='grid grid-cols-3 gap-x-8 space-y-8'>
            {
                data.map((movie:MoviesDataType)=>(
                    <div className='w-[100%] h-[235px] ' >
                        <img src={movie.imgSrc } alt={movie.name} className=' bg-cover'/>
                    </div>
                ))
            }
        </div>
    );
}

export default MovieList;