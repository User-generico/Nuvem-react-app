import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import {Header, Loading, Pe } from "../componets";
import GlobalStyle from "../styles/GlobalStyle";
import {Meio} from "../styles/cirrus";

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
                    <body>
                        <div className = "row">
                            <div className = "col-12"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
                        </div>
                        <div className = "row">
                            <div className = "subsubtitlel col-12">Fibratus:</div>
                        </div>
                        <div className ="row">
                            <div className = "col-8">
                                <p>são parecidas com fibras; têm a aparência de estarem se desfiando. São Cirrus que vêm de longe, e já estão em estágio de 
                                    dissipação, e indicam bom tempo. Formam emaranhados, às vezes espalhando-se por todo o céu, sem aumentar em quantidade, 
                                    sem formar camada contínua e não apresenta concentração em direção específica. Abaixo, fotos e vídeo de Cirrus fibratus.
                                </p>
                            </div>
                            <div className = "col-4">
                                <img src="img/fibra.svg" width="98%" height="auto" alt="fibratus"/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "subsubtitler col-12"> <br></br>Intortus:</div>
                        </div>
                        <div className ="row">
                            <div className = "col-4">
                                <img src="img/intortus.svg" width="100%" height="auto" alt="intortus"/>
                            </div>
                            <div className = "col-8">
                                <p>é uma variação de Cirrus fibratus. Apresentam formato enrolado, desordenado, torto, emaranhado.
                                </p>
                            </div>
                        </div>
                    </body>
                </Meio>
                <Pe />
            </>)}
        </>
    );
}