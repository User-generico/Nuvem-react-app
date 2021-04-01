import { useEffect, useState } from "react";
import {useRouter} from "next/router";
import { apiTipo } from "../../api/data";
import { InterTipo } from "../../styles/Interfaces/Tipo.Interface";
import  Link from "../../styles/Link";
import {Foo} from "../Footer/styles";

const Pe = () =>{
    const router = useRouter();
    const [tipos, setTipos] = useState<InterTipo[]>([]);
    
    useEffect (() => {
        const FectchData = async () => {
            const response = await apiTipo.index();
            setTipos(response.data);
        }
        FectchData();
    }, [])
    return (
        <Foo>
            <footer>
                <ul>
                    <li>
                        <a className="f" href="galeriadasnuvens">Galeria das Nuvens</a>
                        <a className="f" href="registrarnuvens">Registrar Nuvens</a>
                        <a className="f" href="registrarlogar">Registrar/Logar</a>
                        <embed className = "musica" src="img/Circle of Life.mp3"></embed>
                    </li>
                </ul>
            </footer>  
        </Foo>
    );
};
export default Pe;