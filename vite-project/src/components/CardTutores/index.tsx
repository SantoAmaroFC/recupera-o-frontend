interface CardProps {
    pedido: string;
    dias: string;
    foto: string;
    onSaibaMais: ReactElement
}

export default function CardTutores({nome,foto,onSaibaMais}: CardProps) {
    return(
       <div className="flex flex-col justify-center items-center">
      <img src={foto} alt={`Foto de ${nome}`} className="pet-foto h-50" />
      
      
      <div className="pet-info">
        <span className="pet-badge">{nome}</span>
        <h3 className="pet-nome">{nome}</h3>
        <button className="pet-botao" onClick={onSaibaMais}>
          Saiba mais
        </button>
      </div>
    </div>
  );
}