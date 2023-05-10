import Navbar from "../custom_components/navbar"
import CardWrapper from "../custom_components/card_wrapper"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchListData } from "../redux/actions/content";
import InfiniteScroll from "react-infinite-scroll-component";

const Content = () => {
    const dispatch = useDispatch();
    const content = useSelector((state) => state.content)
    const [statePage, setStatePage] = useState(0)
    let isIntial = true;

    useEffect(() => {
        if(isIntial){
            requestContentList()
            isIntial = false; 
        }
    },[])

    const requestContentList = () => {
        if(content.isFiltered == false){
            dispatch(fetchListData(statePage + 1))
            setStatePage((prev) => prev + 1)
        }
    }

    return (
        <>
            <Navbar  />
            <InfiniteScroll
                dataLength={content.dataToDisplay.length}
                next={requestContentList}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                <CardWrapper /> 
            </InfiniteScroll>
             
        </>
    )
}

export default Content