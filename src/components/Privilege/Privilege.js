import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'
import { faGifts } from '@fortawesome/free-solid-svg-icons'
const question = <FontAwesomeIcon icon={faQuestion} />
const fee = <FontAwesomeIcon icon={faMoneyBillWave} />
const license = <FontAwesomeIcon icon={faIdBadge} />
const reward = <FontAwesomeIcon icon={faGifts} />


const Privilege = () => {
    return (
        <div className="mt-5">
            <div>
                <h1 className="text-danger">Why Choose Pet Clinic {question} </h1>
                <div className="mt-5 row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 container d-flex justify-content-center text-danger pb-5">
                    <div className="col">
                        <h1>{fee}</h1>
                        <h1>No Visit Fee</h1>
                    </div>
                    <div className="col">
                        <h1>{license}</h1>
                        <h1>State-licensed veterinarians
                                and professional staff</h1>

                    </div>
                    <div className="col">
                        <h1>{reward}</h1>
                        <h1>Earn Pals Rewards</h1>


                    </div>


                </div>
            </div>

            
        </div>
    );
};

export default Privilege;