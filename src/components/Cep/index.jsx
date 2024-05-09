import { useEffect, useState } from "react";

const CepData = () => {
    const [cepData, setCepData] = useState(null);
    const [cep, setCep] = useState("01001000"); // CEP de exemplo

    useEffect(() => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
            setTimeout(() => {
                setCepData(data);
            }, 3000);
        })
        .catch(error => {
            console.error("Erro ao buscar dados do CEP:", error);
        });
    }, [cep])

    const handleInputChange = (e) => {
        setCep(e.target.value);
    }

    return(
        <div>
            <h2>Consulta de CEP</h2>
            <input type="text" value={cep} onChange={handleInputChange} placeholder="Digite o CEP" />
            {cepData && (
                <div>
                    <p><b>CEP:</b> {cepData.cep}</p>
                    <p><b>Logradouro:</b> {cepData.logradouro}</p>
                    <p><b>Bairro:</b> {cepData.bairro}</p>
                    <p><b>Cidade:</b> {cepData.localidade}</p>
                    <p><b>Estado:</b> {cepData.uf}</p>
                </div>
            )}
        </div>
    )        
    
}

export default CepData;
