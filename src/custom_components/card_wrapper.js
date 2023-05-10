import Card from "./card"
import { useSelector } from "react-redux";

const CardWrapper = () => {
    const content = useSelector((state) => state.content)
    return (
        <div className="pt-[146px] px-[15px] flex flex-wrap">
            {content && content.dataToDisplay.length > 0 && content.dataToDisplay.map((row, index) => {
                return (
                    <Card row={row} key={index}/>
                )
            })}
        </div>
    )
}

export default CardWrapper