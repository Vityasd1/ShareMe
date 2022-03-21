import React,{useState,useEffect} from 'react';


import {MasonryLayout} from "../masonry-layout/MasonryLayout";
import {client} from "../../client";
import {feedQuery, searchQuery} from "../../utils/data";
import {Spinner} from "../spinner/Spinner";
export const Search = ({searchTerm}) => {
    const [pins, setPins] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(searchTerm){
            setLoading(true);
            client.fetch(searchQuery(searchTerm.toLowerCase())).then((data) => {
                setPins(data);
                setLoading(false);
            })
        }else{
            client.fetch(feedQuery).then((data) => {
                setPins(data);
                setLoading(false);
            })
        }
    }, [searchTerm]);


    return (
        <div>
            {loading && <Spinner message="Searching for pons"/>}
            {pins?.length !== 0 && <MasonryLayout pins={pins}/>}
            {pins?.length === 0 && searchTerm !== '' && !loading && (
                <div className="mt-10 text-center text-xl">No pins found!</div>
            )

            }
        </div>
    );
};


