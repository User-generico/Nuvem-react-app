import { useEffect, useState } from "react";
import {useRouter} from "next/router";
import { apiTipo } from "../../api/data";
import { InterTipo } from "../../styles/Interfaces/Tipo.Interface";
import  Link from "../../styles/Link";
import {Container, Dropdown} from "./styles";


const Header = () =>{
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
        <Container>
                <img src ="img/logo.svg"/>
                <Dropdown>
                    <div className="dropdown">
                        <button className="dropbtn">TIPOS DE NUVENS</button>
                        <div className="dropdown-content">
                            <a href="cirrus">CIRRUS</a>
                            <a href="cirruscumulus">CIRRUS CUMULUS</a>
                            <a href="noc">NOCTILUCENTES</a>
                            <a href="onda">ONDULAÇÕES DE KELVIN-HELMHOLTZ</a>
                            <a href="/">HOME</a>
                        </div>
                    </div>
                    <div><a href="como" className="button">COMO NASCEM AS NUVENS</a></div>
                </Dropdown>
        </Container>
    );
};



export default Header;