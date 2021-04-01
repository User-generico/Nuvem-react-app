import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import {Header, Loading, Pe } from "../componets";
import GlobalStyle from "../styles/GlobalStyle";
import {Meio} from "../styles/como";

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
                        <div className="row ptx">
                            <div className="col-2">
                                <img src="img/ter.svg" width="90%" height="auto" alt="termometro"/>
                            </div>
                            <div className="texto col-10"><p>Nuvens são conjuntos de pequenas partículas de gelo, gotículas de água ou de ambos ao mesmo tempo (mistas), 
                                que se encontram em suspensão na atmosfera, após terem se condensado em virtude de fenômenos atmosféricos. As nuvens apresentam 
                                diversas formas, que variam dependendo da natureza, dimensões, número e distribuição das partículas que a constituem e das 
                                correntes de ventos atmosféricos. A forma e a cor da nuvem depende da intensidade e da cor da luz que a nuvem recebe, das posições 
                                relativas ocupadas pelo observador e da fonte de luz (Sol, Lua, raios) que a nuvem reflete.</p></div>
                        </div>
                    </section>
                    <aside>
                        <div className=" texto col-12"><p>Após formadas, as nuvens são transportadas pelo vento, tanto no sentido ascendente (para cima) quanto 
                            descendente (para baixo). Quando a nuvem é forçada a se elevar, ocorre um resfriamento, e as gotículas de água podem ser total ou 
                            parcialmente congeladas. Quando os ventos forçam a nuvem para baixo, ela se dissipa pela evaporação das gotículas de água. A 
                            constituição da nuvem depende, então, de sua temperatura e altitude..</p></div>
                    </aside>
                    <section>
                        <div className="row">
                            <div className="texto col-9"><p>Quando toda ou uma grande parte de uma nuvem sofre uma transformação interna completa, assim passando de 
                                um tipo para outro, é denominado a ela o termo mutatus. É o caso, por exemplo, da transformação de Stratus em Stratocumulomutatus.
                            </p></div>
                                <div className="col-3">
                                    <img src="img/press.svg" width="100%" height="auto" alt="panela de pressão"/>
                                </div>
                        </div>
                    </section>
                </Meio>
                <Pe />
            </>)}
        </>
    );
}