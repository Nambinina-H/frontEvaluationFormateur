import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';  // Importez useNavigate pour la redirection
import FadeLoader from 'react-spinners/FadeLoader'; // Importer le spinner
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Importer les styles de Toastify


const LoginFaciale = () => {
  const [image, setImage] = useState(null);
  const [authResult, setAuthResult] = useState('');
  const [userInfo, setUserInfo] = useState(null); // Stocker les infos de l'utilisateur authentifié
  const [isWebcamVisible, setIsWebcamVisible] = useState(true); // Contrôle la visibilité de la webcam
  const [isLoading, setIsLoading] = useState(false); // État pour gérer le chargement
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  // Capture l'image depuis la webcam et la transforme en Blob
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();

    // Conversion de l'image base64 en Blob (objet binaire)
    fetch(imageSrc)
      .then(res => res.blob())
      .then(blob => {
        setImage(blob);  // Enregistre l'image capturée sous forme de Blob
        setIsWebcamVisible(false);  // Cache la webcam après la capture
        handleAuth(blob);  // Lancer l'authentification immédiatement après la capture
      });
  };

  // Envoie l'image capturée au backend pour authentification
  const handleAuth = async (capturedImage) => {
    if (!capturedImage) {
      setAuthResult('Aucune image capturée');
      return;
    }

    const formData = new FormData();
    formData.append('image', capturedImage, 'capture.jpg'); // Ajout d'un nom de fichier par défaut

    try {
      setIsLoading(true); // Commence le chargement
      const response = await fetch('http://192.168.1.137:8000/utilisateur/authenticate-face/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Échec de l\'authentification');
      }

      const data = await response.json();

      if (data.user_info) {
        setUserInfo(data.user_info);  // Stocke les informations de l'utilisateur
        setAuthResult(data.message);  // Affiche le message d'authentification réussie
    
        // Afficher une notification de succès
        toast.success("Authentification réussie", {
          position: "top-center",
          autoClose: 3000,  // Fermeture automatique après 3 secondes
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    
        // Rediriger vers la page dashboard après 2 secondes (optionnel)
        // setTimeout(() => {
        //   navigate('/login');  // Redirige vers la page "dashboard"
        // }, 2000);
    } else {
        setAuthResult(data.message);  // Affiche le message d'échec d'authentification
    }
    
    } catch (error) {
      setAuthResult('Échec de l\'authentification. Veuillez réessayer.');
    } finally {
      setIsLoading(false); // Arrête le chargement
    }
  };

  // Fonction pour réinitialiser les états
  const resetAuth = () => {
    setImage(null);
    setAuthResult('');
    setUserInfo(null);
    setIsWebcamVisible(true); // Réaffiche la webcam
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (webcamRef.current) {
        capture();
      }
    }, 5000);  // Capture toutes les 5 secondes
  
    return () => clearInterval(interval);  // Nettoie l'intervalle si le composant est démonté
  }, []);
  
  return (
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <a href="index.html" className="logo d-flex align-items-center w-auto">
                  <span className="d-none d-lg-block">Authentification - Faciale</span>
                </a>
              </div>

              <div className="card mb-3">
                <div className="card-body" style={{ width: '320px', height: 'auto' }}>
                  {/* <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">S'authentifier</h5>
                  </div> */}

                  <div className="d-flex justify-content-center pt-4 pb-4" style={{ width: '100%', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {isWebcamVisible && (
                      <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={320}
                        height={240}
                      />
                    )}
                    
                    {isLoading && <FadeLoader size={50} color={"#646cffaa"} />} {/* Affiche le spinner de chargement */}
                    
                    {authResult === 'Échec de l\'authentification. Veuillez réessayer.' && <p>{authResult}</p>}

                    {/* Affichage des informations de l'utilisateur authentifié */}
                    {userInfo && (
                      <div>
                        {/* <h2>Informations de l'utilisateur :</h2> */}
                        <p>Email : {userInfo.email}</p>
                        <p>Nom : {userInfo.nom}</p>
                        <p>Prénom : {userInfo.prenom}</p>
                        <p>Pseudo : {userInfo.pseudo}</p>
                        <p>Téléphone : {userInfo.tel}</p>
                        <p>Matricule : {userInfo.matricule}</p>
                      </div>
                    )}
                  </div>

                  {/* Bouton de réinitialisation centré */}
                  {!userInfo && !isLoading && authResult && (
                    <div className="text-center">
                      <button onClick={resetAuth} className="btn btn-primary">
                        Réessayer
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="credits">
                Conçu par <a href="https://bootstrapmade.com/">LaVilla</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default LoginFaciale;
