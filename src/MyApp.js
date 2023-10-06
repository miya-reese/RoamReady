import React, { useState } from "react"
import Table from "./Component/Table"
import Header from "./Component/Header"
import ScratchForm from "./Component/ScratchForm";

function MyApp() {

    let [showForm, setShowForm] = useState(false);

    if (showForm)
    {
        return (
            <div className="container" onClick={()=>
                {
                    console.log("clicked")
                    setShowForm(!showForm)
                }}>
              <Header />
              <ScratchForm />
              {/*<Table characterData={characters} />*/}
            </div> );
    }
    else
    {
        return (
            <div className="container" onClick={()=>{
                console.log("clicked2")
                setShowForm(!showForm)
                }}>
              <Header />
              {/* <ScratchForm /> */}
              {/*<Table characterData={characters} />*/}
            </div> ); 
    }


}

export default MyApp;