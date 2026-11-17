import Card from "../../components/Card";

export default function Pets() {
    return(
        <div className="p-6">
            <div className="flex items-center justify-between border-b   ">
                <h1 className="font-black">Pets</h1>
                <a href="" className="font-black text-orange-500">Ver Todos</a>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="border rounded-2xl p-4">
                    <Card 
                foto="/bidu.png"
                animal="Cachorro"
                nome="Thor"
                raça="Golden Retriever"
                tutor="Ana Souza"
                onSaibaMais={() =>('Mia')}
                />
                </div>

                <div className="border rounded-2xl p-4"><Card 
                foto="/bidu.png"
                animal="Cachorro"
                nome="Thor"
                raça="Golden Retriever"
                tutor="Ana Souza"
                onSaibaMais={() =>('Mia')}
                /></div>
                <div className="border rounded-2xl p-4"><Card 
                foto="/bidu.png"
                animal="Cachorro"
                nome="Thor"
                raça="Golden Retriever"
                tutor="Ana Souza"
                onSaibaMais={() =>('Mia')}
                /></div>
                <div className="border rounded-2xl p-4"><Card 
                foto="/bidu.png"
                animal="Cachorro"
                nome="Thor"
                raça="Golden Retriever"
                tutor="Ana Souza"
                onSaibaMais={() =>('Mia')}
                /></div>
                <div className="border rounded-2xl p-4"><Card 
                foto="/bidu.png"
                animal="Cachorro"
                nome="Thor"
                raça="Golden Retriever"
                tutor="Ana Souza"
                onSaibaMais={() =>('Mia')}
                /></div>
                <div className="border rounded-2xl p-4"><Card 
                foto="/bidu.png"
                animal="Cachorro"
                nome="Thor"
                raça="Golden Retriever"
                tutor="Ana Souza"
                onSaibaMais={() =>('Mia')}
                /></div>
                <div className="border rounded-2xl p-4"><Card 
                foto="/bidu.png"
                animal="Cachorro"
                nome="Thor"
                raça="Golden Retriever"
                tutor="Ana Souza"
                onSaibaMais={() =>('Mia')}
                /></div>
                <div className="border rounded-2xl p-4"><Card 
                foto ="/bidu.png"
                animal="Cachorro"
                nome="Thor"
                raça="Golden Retriever"
                tutor="Ana Souza"
                onSaibaMais={() =>('Mia')}
                /></div>
                

            </div>
        </div>
    )
}