import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const RepoList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        // DOLAR fetch('https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/') //
       // fetch('https://viacep.com.br/ws/01001000/json/') //
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 2000)
            
        })
    }, [nomeUsuario]);

    return(
        <div className="container">
            {estaCarregando ? (
                <h1 className={styles.carregando}>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                {repos.map(({id, name, language, html_url}) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.listName}>
                            <b>Nome:</b> {name}<br></br>
                        </div>
                        <div className={styles.listLanguage}>
                            <b>Linguagem:</b> {language}<br></br>
                        </div>
                        
                        <a className={styles.listLink} target="_blank" href={html_url}>Visitar no github</a>
                    </li>
                ))}
                
            </ul>
            )}
            
            
        </div>
    )        
    
}

export default RepoList;