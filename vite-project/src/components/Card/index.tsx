import type { ReactElement, ReactNode } from "react";

interface CardProps {
    nome: string;
    animal: string;
    raça: string;
    tutor: string;
    foto: string;
    onSaibaMais: ReactElement
}

export default function Card({nome,animal,raça,tutor,foto,onSaibaMais}: CardProps) {
    return(
       <div className="flex flex-col justify-center items-center">
      <img src={foto} alt={`Foto de ${nome}`} className="pet-foto h-50" />
      
      <div className="pet-info">
        <span className="pet-badge">{animal}</span>
        <h3 className="pet-nome">{nome}</h3>
        
        <p className="pet-detalhe">
          <strong>Raça:</strong> {raça}
        </p>
        <p className="pet-detalhe">
          <strong>Tutor:</strong> {tutor}
        </p>
        
        <button className="pet-botao" onClick={onSaibaMais}>
          Saiba mais
        </button>
      </div>
    </div>
  );
}