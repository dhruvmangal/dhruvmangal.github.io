import nav_bar from '../assets/nav_bar.png'
import back from '../assets/Back.png'
import search from '../assets/search.png'
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';

const Navbar = () =>{
    const content = useSelector((state) => state.content);
    const dispatch = useDispatch();
    const [showSearchBar, setShowSearchBar] = useState(false); 
    const [filter, setFilter] = useState('');

    const handleBack = () => {
        setShowSearchBar(false)
        setFilter('')
    }

    useEffect(() => {
        const getData = setTimeout(() => {
            if(filter !== ''){
                const temp = content.data.filter((data) => data.name.toLowerCase().includes(filter.toLowerCase()))
                dispatch({type : 'setFilteredContentList', value : temp})   
                dispatch({type : 'isFiltered', value: true})   
            }else{
                if(content.data.length > 0){
                    dispatch({type : 'setFilteredContentList', value : content.data})
                    dispatch({type : 'isFiltered', value: false})
                }
            }
        }, 500)
    
        return () => clearTimeout(getData)
    }, [filter])


    return (
        <div className='fixed w-full'>
            <div style={{backgroundImage : `url(${nav_bar})`}} className='flex text-white px-[30px] h-[110px] bg-repeat-x justify-between bg-[length:auto_110px] items-center'>
                {!showSearchBar && 
                    <div className='flex items-center'>
                        <img src={back} className='h-[20px]' />
                        <h2 className='ml-[15px] text-xl font-extralight'>{content.title}</h2>
                    </div>
                }
                {!showSearchBar && 
                    <img src={search} className='h-[20px]' onClick={() => setShowSearchBar(true)} />
                }

                {showSearchBar && 
                <div className='flex items-center w-full'>
                    <img src={back} className='h-[20px]' onClick={handleBack}/>
                    <input type="search" placeholder='Search' className='w-full h-[35px] bg-[#333333] rounded-se-md pl-4 ml-[15px]'  value={filter} onChange={(e) => setFilter(e.target.value)}/>
                </div>
                }
            </div>
        </div>
    )
}

export default Navbar