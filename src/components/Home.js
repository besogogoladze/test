import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Home() {
    const [data, setData] = useState([]);
    let imageUrl = "https://image.tmdb.org/t/p/w500"

    data.slice(Math.max(data.length - 10, 0))
  
    useEffect(()=> 
    {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c89646cb9c2f9f7a6144c074fff0e9c7&language=en-US&page=1')
        .then(res => setData(res.data.results.slice(Math.max(res.data.results.length - 10, 0))))
    },[])
  
  
  
    return (
      <div id="posts" className="d-flex flex-wrap gap-5 w-100 container mx-auto">
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
                                <h4>Description:</h4>
                                <h6>{items.overview.slice(0, 100) + "..."}</h6>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
          
      )}
      </div>
    );
}

export default Home