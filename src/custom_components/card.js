import placeholder_image from '../assets/placeholder_for_missing_posters.png'

const Card = ({row}) => {
    let Image = placeholder_image
    try{
        Image = require(`../assets/${row['poster-image']}`)
    }catch(err){}
    
    return (
        <div className="px-[15px] pb-[90px] text-white text-left basis-4/12 overflow-hidden text-ellipsis whitespace-nowrap">
            <div className='pb-[24px]'>
                <img loading="lazy" src={Image} />
            </div>
            <span className='font-extralight'>{row.name}</span>
        </div>
    )
}

export default Card