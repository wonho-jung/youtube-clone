import React,{useState, useEffect} from 'react'
import "./SearchPage.css"
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from "./VideoRow";
import { useStateValue } from './StateProvider';
import Response from "./response";






function SearchPage() {

const [{term}, dispatch] = useStateValue();
const [searchResults, setSearchResults] = useState([]);

const data = Response;
console.log(data);

useEffect(() => {
    const results = data.filter(item =>
        item.title.toLocaleLowerCase().includes(term)
        
        );
        console.log(results)

        setSearchResults(results);
},[term]);

console.log(searchResults);




    
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>


            <ChannelRow
            channel= "wonho.test" 
            verified= "true" 
            subs ="100k"
            noOfVideos="10+" 
            description="make youtube-clone"/>
            <hr/>



          

            



            <VideoRow
            views="1.4M" 
            subs="300K"
            description="Make Youtube-clone!!!" 
            timetamp="1 weeks ago" 
            channel="won.9 React"
            title="React is easy and fun!!" 
            image="https://miro.medium.com/max/800/0*0ZgS_Z1-5VBdbN3u.png"/>


           {searchResults?.map((items,index) => (
              <VideoRow
              key={index}
              views={items.views}
              subs={items.subs}
              description={items.description}
              timetamp={items.timestamp}
              channel={items.channel}
              title={items.title} 
              image={items.image}/> 
          ))}
            
        </div>
    )
}

export default SearchPage
