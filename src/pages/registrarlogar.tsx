import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import {Header, Loading, Pe } from "../componets";
import GlobalStyle from "../styles/GlobalStyle";
import {Meio} from "../styles/registrarlogar";

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
                <Header />
                <Meio>
                <section>
                    <div className="rowptx" id="container">
                        <div className="col-1">
                            <h1> </h1>
                        </div>
                        <div className="col-3" >   
                            <h1> Registre-se gratuitamente! </h1><br/>
                            <form>
                                <label htmlFor="username">Nome do usuário:</label><br/>
                                <input type="text" id="username" name="username" placeholder="Filtro de Barro"/><br/>
                                <label htmlFor="email">Endereço de e-mail:</label><br/>
                                <input type="text" id="email" name="email" placeholder="flavinhodopneu@gmail.com"/><br/>
                                <label htmlFor="password">Senha:</label><br/>
                                <input type="text" id="password" name="password" placeholder="########S2"/><br/>
                                <label htmlFor="date">Data de nascimento</label><br/>
                                <input type="date" id="date" name="date" placeholder="11/09/2001"/><br/>
                                <input type="submit" value="Registrar"/>
                            </form>
                        </div><br/><br/><br/><br/>
                        <div className = "col-2">
                            <h1> </h1>
                        </div>
                        <div className ="col-3" >
                            <h1> Entre na sua conta! </h1><br/>
                            <form >
                                <label htmlFor="email">Endereço de e-mail:</label><br/>
                                <input type="text" id="email" placeholder="flavinhodopneu@gmail.com"/><br/>
                                <label htmlFor="password">Senha:</label><br/>
                                <input type="text" id="password" placeholder="########S2"/><br/>
                                <input type="submit" value="Iniciar Sessão"/>
                            </form>
                        </div>
                        <div className = "col-1">
                            <h1> </h1>
                        </div>
                    </div>
                </section>
                </Meio>
                <Pe/>
            </>)}
        </>
    );
}