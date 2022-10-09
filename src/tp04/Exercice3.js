import { useState } from "react";

export default function Exercice3(){
    const Init = {
        a: 0,
        b: 0
    }
    return(
        <>
        <div className="Exo-donne Exo-background first-color font-color-3">
            <h3 className="Exo-h3">Exercice 3 – Calculatrice</h3>
            Réalisez une calculatrice avec deux champs de saisie, quatre boutons
            pour les opérations de base (+, -, *, /) et un champ pour l’affichage du
            résultat. Lorsqu’un bouton est cliqué, le calcul est fait et affiché.
            <Calculatrice a={Init.a} b={Init.b} />
        </div>
        </>
    );
}

const Calculatrice = (props) => {
    const [calcul, setCalcul] = useState({
        a: props.a,
        b: props.b,
        resultat: 0
    })

    const handleChange = (evt) => {
        setCalcul({
          ...calcul,
          [evt.target.dataset.id]: evt.target.value,
          resultat: 0
        });
      };
    
      const handleClick = (evt) => {
        //setCalc({ calc, resultat: 0 });
        let a = Number(calcul.a);
        let b = Number(calcul.b);
    
        if (evt.target.dataset.id === "add") {
            setCalcul({ calcul, resultat: a + b });
        } else if (evt.target.dataset.id === "sous") {
            setCalcul({ calcul, resultat: a - b });
        } else {
          if (a === 0 || b === 0) {
            setCalcul({ calcul, resultat: "Impossible d'opérer par 0" });
          } else if (evt.target.dataset.id === "mult") {
            setCalcul({ calcul, resultat: a * b });
          } else {
            setCalcul({ calcul, resultat: a / b });
          }
        }
      };

    return (
        <div className="Exo-reponse Exo-reponse-size2">
          <input data-id="a" placeholder={calcul.a} onChange={handleChange} />
          <input data-id="el2" placeholder={calcul.b} onChange={handleChange} />
          <button data-id="add" onClick={handleClick}>
            +
          </button>
          <button data-id="sous" onClick={handleClick}>
            -
          </button>
          <button data-id="mult" onClick={handleClick}>
            *
          </button>
          <button data-id="div" onClick={handleClick}>
            /
          </button>
          <p>Resultat : {calcul.resultat}</p>
        </div>
      );
    };
