import React, { useState } from "react"
// import Table from "./Component/Table"
import Header from "./Component/Header"
import ScratchForm from "./Component/ScratchForm";
import Welcome from "./Component/Welcome";
import SingleTrip from "./Component/SingleTrip";

function MyApp() {

    let [showForm, setShowForm] = useState(false);

    if (showForm)
    {
        return (
            <div className="container">
               <div className="container"onClick={()=>
                {
                    console.log("clicked")
                    setShowForm(!showForm)
                }}>
                <Header/>
              </div>
              <SingleTrip />
              {/*<Table characterData={characters} />*/}
            </div> );
    }
    else
    {
        return (
            <div className="container">
            <div className="container"onClick={()=>
             {
                 console.log("clicked")
                 setShowForm(!showForm)
             }}>
             <Header/>
             <Welcome/>
           </div>
           {/* <ScratchForm /> */}
           {/*<Table characterData={characters} />*/}
         </div> );
    }


}

export default MyApp;
