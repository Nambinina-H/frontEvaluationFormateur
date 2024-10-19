import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous que Bootstrap est importé
import { Link } from 'react-router-dom';
import Header from '../dashboard/Header';
import SideBar from '../dashboard/SideBar';
import Footer from '../assets/Footer';

const Login = () => {
  return (
    <>
      <main>
      <Header/>
      {/* <SideBar/> */}
        <div class="container">
          <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                  <div class="d-flex justify-content-center py-4">
                    <a href="index.html" class="logo d-flex align-items-center w-auto">
                      <span class="d-none d-lg-block">Evaluation - Formateur</span>
                    </a>
                  </div>

                  <div class="card mb-3">

                  <div class="card-body">

                    <div class="pt-4 pb-2">
                      <h5 class="card-title text-center pb-0 fs-4">S'authentifier</h5>
                    </div>

                    <div class="d-flex justify-content-center pt-4 pb-4">
                      <div class="px-2">
                        <Link to="/loginFaciale"><button class="btn btn-primary btn-lg"><i class="bi bi-person-bounding-box"></i><br/>Faciale</button></Link>
                      </div>
                      <div class="px-2">
                        <Link to="/loginQrCode"><button class="btn btn-primary btn-lg"><i class="bi bi-qr-code-scan"></i><br/>QrCode</button></Link>
                      </div>
                    </div>

                    <div class="pt-2 col-12 text-center">
                      <p class="small mb-0">Pas encore de compte ? <Link to="/registration">Créer un compte</Link></p>
                    </div>

                    </div>

                  </div>
                  <Footer/>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Login;