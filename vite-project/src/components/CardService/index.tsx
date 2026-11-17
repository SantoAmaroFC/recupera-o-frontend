import { Children, type ReactElement } from "react";
import { CiCalendar } from "react-icons/ci";

interface CardProps {
    pedido: string;
    dias: string;
    foto: string;
    onSaibaMais: ReactElement
}

export default function CardService({pedido,dias,foto,onSaibaMais}: CardProps) {
    return(
       <div className="flex flex-col justify-center items-center">
      <CiCalendar className="pet-foto h-50" />
      
      <div className="pet-info">
        <span className="pet-badge">{dias}</span>
        <h3 className="pet-nome">{dias}</h3>
        <button className="pet-botao" onClick={onSaibaMais}>
          Saiba mais
        </button>
      </div>
    </div>
  );
}