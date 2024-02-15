import Link from 'next/link';
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
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 mx-auto px-6 py-10'>
            {
                data.map((movie:MoviesDataType)=>(
                    <div className=' rounded-xl duration-300 hover:scale-105 hover:cursor-pointer ' key={movie.id}>
                        <img src={movie.imgSrc } alt={movie.name} className='w-[100%] h-[235px] object-cover rounded-t-xl'/>
                        <div className='bg-slate-100 p-3 rounded-b-lg '>
                            <p className='text-slate-400'>{movie.category}</p>
                            <h4 className=' text-lg font-semibold text-slate-600 py-1'>{movie.name}</h4>
                            <Link href={movie.link} target='_blank' rel='nonreferrer' className=''>
                                <button className='px-4 py-2 border border-slate-700 font-medium text-slate-800'>Watch Now</button>
                            </Link>
                        </div>
                    </div>

                ))
            }
        </div>
    );
}

export default MovieList;