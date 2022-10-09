import { useState } from "react";

export default function Exercice2(){
    const MatchInit = {
        scoreA: 0,
        scoreB: 0
    }
    return (
        <div className="Exo-background second-color font-color-4 Exo-donne">
            <h3 className="Exo-h3">Exercice 2</h3>
            <h4 className="Exo-h4">Affichez le résultat d’un match (nb buts équipe A : nb buts équipe B)</h4>
            <p>Ajoutez deux champs de saisie : un pour le nombre de buts de chaque
            équipe (A et B) Lorsque le nombre de buts d’une équipe change, le
            résultat est mis à jour</p>
            <CalculResultat equipeA={MatchInit.scoreA} equipeB={MatchInit.scoreB} />       
        </div>
    );
};

const CalculResultat = (props) =>{
    const [match, setMatch] = useState({
        scoreA: props.equipeA,
        scoreB: props.equipeB
    });

    const handleChange = (evt) => {
        let stkScore = 0;
        if(evt.target.dataset.id==="scoreA"){
            stkScore = match.scoreA;
            setMatch({ ...match, [evt.target.dataset.id] : Number(stkScore) + Number(evt.target.value)});    
        } else{
            stkScore = match.scoreB;
            setMatch({ ...match, [evt.target.dataset.id] : Number(stkScore) + Number(evt.target.value)});
        }
    }
    return(
        <>
            <div className="Exo-reponse Exo-reponse-size2">
            <p>Resultat : {match.scoreA} - {match.scoreB}</p>
            <input data-id="scoreA" className="Exo-input" placeholder="Nombre de but(s) entrés par l'équipe A" onBlur={handleChange}/>
            <input data-id="scoreB" className="Exo-input" placeholder="Nombre de but(s) entrés par l'équipe B" onBlur={handleChange}/>
            </div>
        </>
    );
};