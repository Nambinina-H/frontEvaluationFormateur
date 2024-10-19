import React from 'react';
import Footer from './Footer';
import maintenanceImage from './maintenanceImage.png'; 

const EnMaintenance = () => {
  return (
    <>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                {/* <div className="d-flex justify-content-center py-4">
                  <a href="index.html" className="logo d-flex align-items-center w-auto">
                    <span className="d-none d-lg-block">En maintenance</span>
                  </a>
                </div> */}

                <div>
                  <div className="card-body text-center">
                    <img src={maintenanceImage} alt="En maintenance" style={{ width: '150px', marginBottom: '20px' }}/>
                    <div className="pb-2">
                      <h5 className=" pb-0 fs-4">Cette partie est en maintenance</h5>
                      <p className="text-muted">Merci de votre patience !</p>
                    </div>
                  </div>
                </div>

                <Footer />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EnMaintenance;
