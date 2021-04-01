import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import {Header, Loading, Pe } from "../componets";
import GlobalStyle from "../styles/GlobalStyle";
import {Meio} from "../styles/registrarnuvem";

export default function Home() {
    const [IsLoading, stIsLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            stIsLoading(false);
        },4000);
    });
    return (
        <>
            {IsLoading ? (<Loading />): (
            <>
            <Header/>
            <Meio>
                <section>
                    <div className="row ptx">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <h1 className="titulo"> Registre aqui a imagem de nuvem e o seu tipo: </h1><br/>
                            <p>Escolha a imagem:</p>
                            <form action="/action_page.php" className="chosen-file">
                                <input type="file" id="myfile" name="myfile" className="chosenfile"/><br/><br/>
                            </form>
                                <p>Escolha o tipo de nuvem:</p>
                                    <select name="my_html_select_box">
                                        <option>Cirrus </option>
                                        <option>Cirrus Cumulus</option>
                                        <option>Noctilucentes</option>
                                    </select><br/><br/>
                            <form className="titulodescricao" action="/action_page.php">
                                <label htmlFor="titulo">Coloque aqui o título da obra de arte:</label><br/><br/><br/>
                                <input type="text" id="titulo" name="titulo" placeholder="A  N u v e m"/><br/><br/><br/>
                                <label htmlFor="descricao">Coloque aqui a descrição da obra de arte: </label><br/><br/><br/>
                                <input type="text" id="descricao" name="descricao" placeholder="Essa nuvem foi tirada em um dia ensolarado e muito tranquilo."/><br/><br/>
                                <p> Como você prefere ser reconhecido pela imagem? </p>
                                <input type="radio" id="anonimous" name="anonimous" value="anonimous"/>
                                <label htmlFor="anonimous">Anônimo</label><br/>
                                <input type="radio" id="pelonome" name="pelonome" value="pelonome"/>
                                <label htmlFor="pelonome">Pelo nome de usuário</label><br/><br/><br/>
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                        <div className="col-1">	
                        </div>
                    </div>
            </section>
            </Meio>
            <Pe/>
            </>)}
        </>
    );
}