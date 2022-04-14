import React,{useState,useEffect} from "react";
import ReactLoading from 'react-loading';
import axios from "axios";
import * as Constants from "./../constants"; //importing contants from constants file
import ViewBooks from './viewbooks' //importing viewbooks component

//initializing data to be used in a react loading component
let color = "rgb(230, 52, 52)";
let type = "spinningBubbles";

const Home = () =>{
    const [data, setdata] = useState([]);
    const [display, setdisplay] = useState(false);
    const [progress, setProgress] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {

        //fetching data fro the url using axios
        const Get2 = async () => {
            axios.post(Constants.BOOKS_API_URL, {
                query: Constants.BOOKS_QUERY

            }).then(response => {
                setdisplay(true);
                setProgress(false)
                if (response.data) {
                    //storing data gotten in data field if data was returned
                    setdata(response.data.data.book.pages);
                } else {
                    //error message when the request got no response
                    setError("There was an error.No records found")
                }
                // 
            }).catch(error => {
                //Error message when the request was unsuccessful
                setProgress(false)
                setError("Sorry an error occurred,reload the page");
                

            });
        }
        Get2();
    }, []);

    return  <>
    <div style={{ width:"90%",margin: "0 auto" }} >
       
        {//diplaying progress bar
        (progress) ?
            <div className="loadingbar">
            <ReactLoading type={type} color={color} height={200} width={100} />
            </div>

            : null
        }
        {display &&
        //displaying content on successful request 
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "5px"
        }}>
            <ViewBooks books={data} />
          
            </div>
}
        {
            //displaying an error field
        error && <div className="progressl"><div className="error">{error}</div></div>}
    </div>
</>
}

export default Home;