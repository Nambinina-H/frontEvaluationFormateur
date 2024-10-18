import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    email: '',
    nom: '',
    prenom: '',
    pseudo: '',
    tel: '',
    matricule: '',
    photo: null,
    empreinte_digitale: null,
    type: '',
    carte_etudiant: null,
    titre: '',
    role: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({
      ...formData,
      [name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://192.168.1.137:8000/utilisateur/utilisateurs/create/', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      const data = await response.json();
      alert('Utilisateur créé avec succès');
      console.log('User created:', data);
    } catch (error) {
      console.error('Erreur lors de la création de l’utilisateur:', error);
      console.log('xxx',formData);
    }
  };
  

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

                          <form onSubmit={handleSubmit} class="row g-3 needs-validation" novalidate>
                          <select class="col-12 form-select" aria-label="Default select example" name="type" value={formData.type} onChange={handleInputChange}>
                            <option value="">Choisir un type</option>
                            <option value="etudiant">Étudiant</option>
                            <option value="enseignant">Enseignant</option>
                            <option value="admin">Administrateur</option>
                            <option value="responsable">Responsable Pédagogique</option>
                          </select>

                            <div class="col-12">
                              <label for="yourEmail" class="form-label">Email</label>
                              <input type="email" name="email" value={formData.email} onChange={handleInputChange} class="form-control" id="yourEmail"  required/>
                              <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                            </div>

                            <div class="col-12">
                              <label for="name" class="form-label">Nom</label>
                              <input type="text" name="nom" value={formData.nom} onChange={handleInputChange} class="form-control" id="nom" required/>
                              <div class="invalid-feedback">Please, enter your name!</div>
                            </div>

                            <div class="col-12">
                              <label for="prenom" class="form-label">Prénom</label>
                              <input type="text" name="prenom" value={formData.prenom} onChange={handleInputChange} class="form-control" id="prenom" required/>
                              <div class="invalid-feedback">Please, enter your name!</div>
                            </div>

                            <div class="col-12">
                              <label for="pseudo" class="form-label">Pseudo</label>
                              <input type="text" name="pseudo" value={formData.pseudo} onChange={handleInputChange} class="form-control" id="pseudo" required/>
                              <div class="invalid-feedback">Please, enter your name!</div>
                            </div>

                            <div class="col-12">
                              <label for="tel" class="form-label">Téléphone</label>
                              <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">+261</span>
                                <input type="text" name="tel" value={formData.tel} onChange={handleInputChange} class="form-control" id="tel" required/>
                                <div class="invalid-feedback">Please choose a username.</div>
                              </div>
                            </div>

                            <div class="col-12">
                              <label for="matricule" class="form-label">Matricule</label>
                              <input type="text" name="matricule" value={formData.matricule} onChange={handleInputChange} class="form-control" id="matricule" required/>
                              <div class="invalid-feedback">Please, enter your name!</div>
                            </div>

                            <div class="col-12">
                              <label for="photo" class="form-label">Image</label>
                              <input class="form-control" type="file" name="photo" onChange={handleFileChange} id="photo"/>
                            </div>



                            {/* {formData.type === 'etudiant' && (
                              <div class="col-12">
                                <label for="carte_etudiant" class="form-label">Carte étudiant</label>
                                <input class="form-control" type="file" name="carte_etudiant" onChange={handleFileChange} id="carte_etudiant"/>
                              </div>
                            )} */}

                            {formData.type === 'enseignant' && (
                              <div class="col-12">
                                <label for="titre" class="form-label">Titre</label>
                                <input type="text" name="titre" value={formData.titre} onChange={handleInputChange} class="form-control" id="titre" required/>
                                <div class="invalid-feedback">Please enter your password!</div>
                              </div>
                            )}

                            {formData.type === 'responsable' && (
                              <div class="col-12">
                                <label for="role" class="form-label">Rôle</label>
                                <input type="text" name="role" value={formData.role} onChange={handleInputChange} class="form-control" id="role" required/>
                                <div class="invalid-feedback">Please enter your password!</div>
                              </div>
                            )}

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
                            <div class="col-12 text-center">
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