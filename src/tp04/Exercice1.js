import {useState} from "react";
import './exercice.css';

export default function Exercice1(){

    const ClientInit = {
        nom: "John",
        prenom: "Doe",
        mail: "@gmail.com"
    }

    return(
        <div className="Exo-background fourth-color font-color-1">
            <h3 className="Exo-h3">Exercice 1 – Détail d’un client</h3>
                <div className="Exo-donne">
                    <p>Créez un formulaire qui affiche le détail d’un client :</p>
                    <ul>
                        <li>Nom</li>
                        <li>Prénom</li>
                        <li>Email</li>
                    </ul>
                    <p>Les valeurs doivent pouvoir être modifiées</p>
                </div>
            <div className="Exo-reponse Exo-reponse-size1">
            <Client nom={ClientInit.nom} prenom={ClientInit.prenom} mail={ClientInit.nom+"."+ClientInit.prenom+ClientInit.mail}/>
            </div>
        </div>
    );
};


const Client = (props) => {
    const [client, setClient] = useState({
        nom: props.nom,
        prenom: props.prenom,
        mail: props.mail
    });

    const handleChange = (evt) => {
        setClient({ ...client, [evt.target.dataset.id]: evt.target.value });
      };

    return(
        <>
        <li>Nom: {client.nom}</li>
        <li>Prenom: {client.prenom}</li>
        <li>Mail: {client.mail}</li>
        <input data-id="nom" value={client.nom} className="Exo-input" onChange={handleChange} />
        <input data-id="prenom" value={client.prenom} className="Exo-input" onChange={handleChange} />
        <input data-id="mail" value={client.mail} className="Exo-input" onChange={handleChange} />
        </>
    );
};