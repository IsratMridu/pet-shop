import React from 'react';

const Facilities = () => {
    return (
        <div className=" mt-5">
            <h1 className="text-danger mb-5">Additional Services</h1>
            <div className="container">
            <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Surgery
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Surgeries are performed under anesthesia for various conditions. Our full-service hospitals offer a variety of outpatient surgeries for pets.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Dental Care
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Your pet's oral health is a good indicator of their overall health. Your pet's teeth should be checked at least once a year for early signs of problems. Our hospitals offer anesthetized dental cleanings and procedures.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Nose-to-tail-Exams
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">At a wellness exam or checkup your veterinarian will observe your pet's general health, perform routine wellness screenings and administer vaccinations as needed.</div>
    </div>
  </div>

  
  
  
</div>

            </div>
        </div>
    );
};

export default Facilities;