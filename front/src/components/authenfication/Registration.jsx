import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  

  return (
        <>
          <main>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto">
                  <img src="assets/img/logo.png" alt=""/>
                  <span class="d-none d-lg-block">Evaluation - Formateur</span>
                </a>
              </div>

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Créer un compte</h5>
                  </div>

                  <form class="row g-3 needs-validation" novalidate>
                    <select class="col-12 form-select" aria-label="Default select example">
                      <option selected>Type</option>
                      <option value="1">Etudiant</option>
                      <option value="2">Enseignant</option>
                      <option value="3">Administrateur</option>
                      <option value="3">Responsable Pédagogique</option>
                    </select>


                    <div class="col-12">
                      <label for="yourEmail" class="form-label">Email</label>
                      <input type="email" name="email" class="form-control" id="yourEmail" required/>
                      <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourName" class="form-label">Nom</label>
                      <input type="text" name="name" class="form-control" id="yourName" required/>
                      <div class="invalid-feedback">Please, enter your name!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourName" class="form-label">Prénom</label>
                      <input type="text" name="name" class="form-control" id="yourName" required/>
                      <div class="invalid-feedback">Please, enter your name!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourName" class="form-label">Pseudo</label>
                      <input type="text" name="name" class="form-control" id="yourName" required/>
                      <div class="invalid-feedback">Please, enter your name!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourUsername" class="form-label">Téléphone</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">+261</span>
                        <input type="text" name="username" class="form-control" id="yourUsername" required/>
                        <div class="invalid-feedback">Please choose a username.</div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="yourName" class="form-label">Matricule</label>
                      <input type="text" name="name" class="form-control" id="yourName" required/>
                      <div class="invalid-feedback">Please, enter your name!</div>
                    </div>

                    <div class="col-12">
                      <label for="formFile" class="form-label">Image</label>
                      <input class="form-control" type="file" id="formFile"/>
                    </div>

                    <div class="col-12">
                      <label for="formFile" class="form-label">Carte étudiant</label>
                      <input class="form-control" type="file" id="formFile"/>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Titre</label>
                      <input type="password" name="password" class="form-control" id="yourPassword" required/>
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Rôle</label>
                      <input type="password" name="password" class="form-control" id="yourPassword" required/>
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required/>
                        <label class="form-check-label" for="acceptTerms">J'accepte <a href="#">les termes et conditions</a></label>
                        <div class="invalid-feedback">You must agree before submitting.</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit">Créer</button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">Vous avez déjà un compte ? <Link to="/login">Connectez-vous</Link></p>
                    </div>
                  </form>

                </div>
              </div>

              <div class="credits">
                Conçu par <a href="https://bootstrapmade.com/">Team LaVilla</a>
              </div>

            </div>
          </div>
        </div>

      </section>

    </div>
  </main>
        </>
  );
};

export default Registration;