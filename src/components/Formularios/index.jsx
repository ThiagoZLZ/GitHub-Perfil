import { useState, useEffect } from "react"

const Formulario = () => {

    // Para capturar os valores do input //
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O estado nome mudou");
    },[nome]); // Só vai acionar o console.log quando o nome for alterado //

    useEffect(() => {
        console.log("A materiaA mudou para:" + materiaA)
    }, [materiaA]);

    useEffect(() => {
        console.log("O componente iniciou");

        return () => {
            console.log("O componente finalizou")
        }
    })

    const alteraNome = (evento) => {
        setNome(evento.target.value);
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7){
            return (
                <p>Olá {nome},<br></br> você foi aprovado com a media de: {media.toFixed(2)}</p>
            )
        }else{
            return (
                <p>Olá {nome},<br></br> você foi reprovado, sua média foi: {media.toFixed(2)}</p>
            )
        }
    }

    return(

        <form>
            
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>

                    {/* Pode ser feito colocando o target entre parenteses e conchetes ou com evento */}
            <input type="number" placeholder="Nota materia A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>

            <input type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario