import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
export function Four(){
    return(
    <>
    <div className="container">
        <div className="text-center row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
                <h1>Notifications</h1>
                <div className="unit bg-primary p-2 text-white"><FontAwesomeIcon icon={faCircleCheck} />Information Message</div><br/>
                <div className="unit1 bg-success p-2 text-white"><FontAwesomeIcon icon={faCircleCheck} />Success Message</div><br/>
                <div className="unit2 bg-warning p-2 text-white"><FontAwesomeIcon icon={faBell} />warning Message</div><br/>
                <div className="unit3 bg-danger p-2 text-white"><FontAwesomeIcon icon={faCircleExclamation} />Error Message</div>
            </div>
            <div className="col-lg-4"></div>
        </div>
        
    </div>
    </>
    );
}
    