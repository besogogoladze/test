import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { useMediaQuery } from 'react-responsive'


function ProductPages() {

    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(5);

    let imageUrl = "https://image.tmdb.org/t/p/w500";

  
    useEffect(()=> 
    {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c89646cb9c2f9f7a6144c074fff0e9c7&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&fbclid=IwAR0HMJDNFy2dBN6ujR7w3p4F5aR6Wg781RiacrTg6sA-8XfQGZJnRx-7gGc')
        .then(res => setData(res.data.results.slice(Math.max(res.data.results.length - 20, 0))))
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c89646cb9c2f9f7a6144c074fff0e9c7&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate&fbclid=IwAR0HMJDNFy2dBN6ujR7w3p4F5aR6Wg781RiacrTg6sA-8XfQGZJnRx-7gGc')
        .then(res => setData2(res.data.results.slice(Math.max(res.data.results.length - 10, 0))))
    },[])

    const isMobileScreen = useMediaQuery({ query: '(max-width: 750px)' })
    const isMobileOrTabletScreen = useMediaQuery({ query: '(max-width: 990px)' })
    const isTabletScreen = useMediaQuery({ query: '(max-width: 1200px)' })
    const isBigScreen = useMediaQuery({ query: '(max-width: 1400px)' })

    function onChangeItemsSize(){
        if( isMobileScreen === true ){
            setItemsToShow(1)
        }
        else if( isMobileOrTabletScreen === true ){
            setItemsToShow(2)
        }
        else if( isTabletScreen === true ){
            setItemsToShow(3)
        }
        else if( isBigScreen === true ){
            setItemsToShow(4)
        }
        else {
            setItemsToShow(5)
        }
    }


  return (
    <div id="posts" className="d-flex flex-wrap gap-5 w-100 container mx-auto">
        <Carousel onResize={onChangeItemsSize} itemsToShow={itemsToShow}>
            {
            data.map((items) => 
                <div key={items.id}>
                    <Link className="color " key={items.id} to={`/Boovies/Movies/${items.id}`}>
                        <div className="description">
                            <div className="description-toHide">
                                <img className="postImg w-100 h-320px border-radius-5" alt={items.original_title + " error "} src={imageUrl + items.poster_path}/>
                            </div>
                            <div className="description-hidden">
                                <img className="w-100 h-320px absolute border-radius-5" alt={items.original_title + " error "} src={imageUrl + items.poster_path}/>
                                <h5>{items.original_title}</h5>
                                <div className="d-flex flex-column gap-3 description-bg-color from-down">
                                    <h4>Description :</h4>
                                    <h6>{items.overview.slice(0, 100) + "..."}</h6>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            
        )}
            {
            data2.map((items) => 
                <div key={items.id}>
                    <Link className="color " key={items.id} to={`/Boovies/Movies/${items.id}`}>
                        <div className="description">
                            <div className="description-toHide">
                                <img className="postImg w-100 h-320px border-radius-5" alt={items.original_title + " error "} src={imageUrl + items.poster_path}/>
                            </div>
                            <div className="description-hidden">
                                <img className="w-100 h-320px absolute border-radius-5" alt={items.original_title + " error "} src={imageUrl + items.poster_path}/>
                                <h5>{items.original_title}</h5>
                                <div className="d-flex flex-column gap-3 description-bg-color from-down">
                                    <h4>Description:</h4>
                                    <h6>{items.overview.slice(0, 100) + "..."}</h6>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </Carousel>
        
      </div>
  )
}

export default ProductPages