import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
const arrow = <FontAwesomeIcon icon={faArrowAltCircleRight} />

const Footer = () => {
    return (
        <div className="py-5 bg-success">
            <h1 className="text-white mb-3">Keep In Touch</h1>
           <div className="d-flex align-items-center justify-content-center pb-4">
               
               <input type="email" placeholder="Enter Email" className="px-3 py-2" />
               <button className="btn btn-danger px-3 py-2">{arrow}</button>
           </div>
           <div>
               <h1 className="text-white mb-3">©2021 Pet Clinic, Inc. All rights reserved.</h1>
               <h5 className="text-white mb-3">Pet Clinic Animal Supplies, Inc.® is not an insurer and is not engaged in the business of insurance. PetCoach, LLC is a licensed insurance producer, not an insurer, and a wholly owned subsidiary of Pet Clinic Animal Supplies, Inc. The Pet Clinic name is used for the brand name. In California, PetCoach, LLC does business as PetCoach Insurance Solutions Agency (CA License No. 0M10414).</h5>
               <h5 className="text-white mb-3">Pet Insurance plans are underwritten by United States Fire Insurance Company (NAIC#21113. Morristown, NJ). Insurance plans are marketed and offered by PetCoach, LLC.</h5>
               <h5 className="text-white pb-3">Pre-existing conditions are not covered. Waiting periods, annual deductible, co-insurance, benefit limits and exclusions may apply. Click here for all terms and conditions. Products, schedules, discounts, and rates may vary and are subject to change. More information available at checkout. Enroll at petco.com/petco-insurance.</h5>
           </div>
            
        </div>
    );
};

export default Footer;