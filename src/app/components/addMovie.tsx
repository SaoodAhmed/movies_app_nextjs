import React, { use, useState } from 'react'
import { Input } from "@/components/ui/input"

type MoviesDataType = {
    id: number;
    name: string;
    imgSrc: string;
    category: string;
    link: string;
}

const AddMovie: React.FC<{ addMovie: any}> = ({ addMovie }) => {
    // const [imgSrc, setImgSrc] = useState("");
    // const [category, setCategory] = useState("")
    // const [name, setName] = useState("")
    // const [link, setLink] = useState("")

    const [data, setData] = useState({
        imgSrc:"",
        category:"",
        name:"",
        link:""
    })

    const handleAdd = (e:any) => {
        e.preventDefault();
        addMovie(data);
      };
    

    const handleOnChange = (event:any)=>{
        setData({
            ...data,
            [event.target.name]: event.target.value,
          });
    };
    

  return (
    <div className='mt-6'>
        <form onSubmit={(e)=>handleAdd(e)} className='flex justify-center items-center flex-col gap-y-4 ' >
            <Input className=' shrink-0 outline-none text-slate-600 focus:purple-800  focus:border-blue-600' placeholder='Enter image url' value={data.imgSrc} name="imgSrc" onChange={handleOnChange}/>
            <Input className='outline-none text-slate-600 focus:purple-800 focus:border-blue-600' placeholder='Enter movie name' value={data.name} name='name' onChange={handleOnChange}/>
            <Input className=' outline-none text-slate-600 focus:purple-800 focus:border-blue-600' placeholder='Enter movie category' value={data.category} name='category' onChange={handleOnChange}/>
            <Input className=' outline-none text-slate-600 focus:purple-800 focus:border-blue-600' placeholder='Enter movie url' value={data.link} name='link' onChange={handleOnChange}/>
            <button type="submit" className="bg-gradient-to-t text-slate-100 w-36 text-lg py-2 rounded-md from-purple-800 via-indigo-700 to-blue-500 font-medium">
            Add Movie
            </button>   
        </form>

    </div>
  )
}

export default AddMovie