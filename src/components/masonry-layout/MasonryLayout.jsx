import React from 'react';
import Masonry from "react-masonry-css";
import {Pin} from "../pin/Pin";

const breakpointObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
}

export const MasonryLayout = ({pins}) => {
    return (
        <Masonry breakpointCols={breakpointObj} className="flex animate-slide-fwd">
            {pins?.map((pin) => (
                <Pin key={pin._id} pin={pin} className={"w-full"}/>
            ))

            }
        </Masonry>
    );
};


