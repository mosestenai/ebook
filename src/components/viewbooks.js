import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { setTokenSession } from '../Utils/Common';


function ViewBooks({ books }) {

    const navigate = useNavigate();

    const [firstpage, setfirstpage] = useState(0);
    const [secondpage, setsecondpage] = useState(1);

    //add two to display the next pages contents
    const nextpage = () => {
        let r = firstpage + 2;
        setfirstpage(r)
        let f = secondpage + 2;
        setsecondpage(f)
    }
    //subtract two to display the previous pages contents
    const backpage = () => {
        let r = firstpage - 2;
        setfirstpage(r)
        let f = secondpage - 2;
        setsecondpage(f)
    }


    return <div style={{
        backgroundColor: "silver",
        width: "90%",

        padding: 5,
        borderRadius: 10
    }}>

        <div style={{
            width: "40%",
            height: 300,
            position: "absolute",
            marginLeft: "36%",
            borderRight: "1px solid white"
        }}>
            <div style={{
                fontSize: 35,
                display: "flex",
                flexWrap: "wrap",
            }}>
                {books[secondpage]?.content.split(" ").map((word) => {
                    return (<div
                        style={{ padding: 5, cursor: "pointer" }}
                        onClick={() => {
                            let index = books[secondpage]?.content.split(" ").indexOf(word);
                            let token = books[secondpage]?.tokens[index].position;
                            setTokenSession(token)
                            navigate('/displaytoken')
                        }}>
                        {word}</div>);
                })}
            </div>

        </div>
        <div style={{
            width: "40%",
            height: 300,
            borderRight: "1px solid white"
        }}>
            <div style={{
                fontSize: 35,
                display: "flex",
                flexWrap: "wrap",
            }}>
                {books[firstpage]?.content.split(" ").map((word) => {
                    return (<div
                        style={{ padding: 5, cursor: "pointer" }}
                        onClick={() => {
                            let index = books[firstpage]?.content.split(" ").indexOf(word);
                            let token = books[firstpage]?.tokens[index].position;
                            setTokenSession(token)
                            navigate('/displaytoken')
                        }}>
                        {word}</div>);
                })}
            </div>


        </div>
        {/* Display only when page value is before the last  page*/}
        {secondpage < 26 &&
            <button
                style={{
                    marginTop: 5,
                    marginLeft: "75%",
                    position: "absolute",
                    padding:5,
                    backgroundColor: "#ef4b42",
                    color:"white",
                    border: "none",
                    borderRadius:5,
                    cursor:"pointer"
                }}
                onClick={nextpage}
            >Next</button>
        }
        {/* Display only when page value is after the first page*/}
        {firstpage > 1 &&
            <button style={{
                marginTop: 5,
                position: "absolute",
                padding:5,
                backgroundColor: "#ef4b42",
                color:"white",
                border: "none",
                borderRadius:5,
                cursor:"pointer"
            }}
                onClick={backpage}
            >Back</button>}




    </div>


}

export default ViewBooks;
