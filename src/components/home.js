import React,{useState,useEffect} from "react";
import ReactLoading from 'react-loading';
import axios from "axios";
import * as Constants from "./../constants";
import ViewBooks from './viewbooks'

let color = "rgb(230, 52, 52)";
let type = "spinningBubbles";

const Home = () =>{
    const [data, setdata] = useState([]);
    const [display, setdisplay] = useState(false);
    const [progress, setProgress] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {

        const Get2 = async () => {
            axios.post(Constants.BOOKS_API_URL, {
                query: Constants.BOOKS_QUERY

            }).then(response => {
                setdisplay(true);
                setProgress(false)
                if (response.data) {
                    setdata(response.data.data.book.pages);
                    console.log(response.data)
                } else {
                    setError("There was an error.No records found")
                }
                // 
            }).catch(error => {
                setProgress(false)
                setError("Sorry an error occurred,reload the page");
                //if(error.response.status === 401 || error.response.status === 400){}

            });
        }
        Get2();
    }, []);

    return  <>
    <div style={{ width:"90%",margin: "0 auto" }} >
       
        {(progress) ?
            <div className="loadingbar">
            <ReactLoading type={type} color={color} height={200} width={100} />
            </div>

            : null
        }
        {display &&
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "5px"
        }}>
            <ViewBooks books={data} />
          
            </div>
}
        {error && <div className="progressl"><div className="error">{error}</div></div>}
    </div>
</>
}

export default Home;