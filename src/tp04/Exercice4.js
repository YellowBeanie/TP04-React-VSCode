import { useState } from "react";

export default function Exercice4(){

    const ListDeTacheInit = {
        titre: "Liste de tâches à faire : ",
        taches: ["Me lever", "Faire mon TP", "Rendre mon tP"]
    };

    return (
        <>
          <div className="Exo-background third-color font-color-1 Exo-donne">
            <h3 className="Exo-h3">Exercice 4 – Liste de tâches à faire</h3>
            Créez une vue qui affiche :
            <ul>
              <li>Un titre</li>
              <li>Un champ de saisie</li>
              <li>Un bouton "Ajouter"</li>
              <li>Une liste d'éléments"</li>
            </ul>
            Lorsque le bouton "Ajouter" est cliqué, la valeur saisie dans le champ
            est ajoutée dans la liste
            <ReponseExo4 titre={ListDeTacheInit.titre} taches={ListDeTacheInit.taches} />
          </div>

        </>
      );
};

const ReponseExo4 = (props) => {

    const titre = props.titre;
    let stkTaches = "";

    const [liste, setListeDeTache] = useState({
         taches: props.taches
    });

    const handleSubmit = () => {
        if(stkTaches !== ""){
        liste.taches.push(stkTaches);
        setListeDeTache({ liste, taches: liste.taches });
    }};

    const handleBlur = (evt) => {
        stkTaches = evt.target.value;
    }    

    return(
        <div className="Exo-reponse Exo-reponse-size2">
            <h4 className="Exo-h4"> Titre : formulaire de {titre}</h4>
            <input placeholder="Entrez une nouvelle tâche" onBlur={handleBlur} />
            <button type="submit" onClick={handleSubmit}>
            Ajouter
            </button>
            <ul>
            {liste.taches.map((l) => (
                <li>{l}</li>
            ))}
            </ul>
        </div>
    )

};

