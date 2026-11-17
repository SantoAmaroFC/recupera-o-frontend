import { CiCalendar } from "react-icons/ci";
import CardService from "../../components/CardService";

export default function Servicos() {
    return(
        <div className="p-6">
            <div className="flex items-center justify-between border-b   ">
                <h1 className="font-black">Serviços</h1>
                <a href="" className="font-black text-orange-500">Ver Todos</a>
            </div>
            <div className="grid grid-cols-5 gap-4">
                
                <div className="border rounded-2xl p-4"><CardService 
                pedido="Cachorro"
                dias="Thor"
                onSaibaMais={() =>('Mia')}
                />
                </div>

                <div className="border rounded-2xl p-4"><CardService 
                pedido="Cachorro"
                dias="Thor"
                onSaibaMais={() =>('Mia')}
                />
                </div>
                

                <div className="border rounded-2xl p-4"><CardService 
                pedido="Cachorro"
                dias="Thor"
                onSaibaMais={() =>('Mia')}
                />

                </div>
                <div className="border rounded-2xl p-4"><CardService 
                pedido="Cachorro"
                dias="Thor"
                onSaibaMais={() =>('Mia')}
                />
                </div>
                
                <div className="border rounded-2xl p-4"><CardService 
                pedido="Cachorro"
                dias="Thor"
                onSaibaMais={() =>('Mia')}
                /></div>

                </div>
            </div>
    )
}