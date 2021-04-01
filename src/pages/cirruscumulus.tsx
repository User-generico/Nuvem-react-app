import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import {Header, Loading, Pe } from "../componets";
import GlobalStyle from "../styles/GlobalStyle";
import {Meio} from "../styles/noconda";

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
                    <section>
                        <div className="row ptx">
                            <div className="col-6">
                                <img src="img/vccu.svg" width="95%" height="auto" alt="cirrus cumulus 1"/>
                            </div>
                            <div className="texto col-6"><p>Cirrocumulus são nuvens delgadas, compostas de elementos muito pequenos, em forma de grânulos e rugas e 
                                estão dispostas de forma mais ou menos regular. Indicam turbulência. São constituídas por cristais de gelo, e as poucas gotículas 
                                de água existentes logo se solidificam.</p></div>
                        </div>
                    </section>
                    <aside>
                        <div className=" texto col-12"><p>São transparentes o suficiente para deixarem a luz do Sol passar, e corona e iridescência podem ser 
                            observadas. Se formam em altitudes entre 6 e 12 km. São nuvens muito finas, com uma textura regular (com um efeito ondulado, com 
                            a aparência de escamas de peixe) formada por elementos pequenos com a forma de pontos, retalhos ou camadas.</p>
                            </div>
                    </aside>
                    <section>
                        <div className="row">
                            <div className="texto col-6"><p>Formam-se em massas de ar com alguma instabilidade, quando a umidade e a temperatura são relativamente 
                                baixas. Confundem-se, por vezes, com Altocumulus, mas distinguem-se delas porque têm uma massa individual menor e não têm sombras, 
                                mostrando que estão a altitudes muito elevadas. É um dos tipos de nuvem menos comuns e forma-se geralmente a partir de Cirrus 
                                ou Cirrostratus.
                            </p></div>
                                <div className="col-6">
                                    <img src="img/ccu.svg" width="95%" height="auto" alt="cirrus cumulus 2"/>
                                </div>
                        </div>
                    </section>
                    <aside className="subti">SUB-TIPOS</aside>
                    <section>
                        <div className = "row">
                            <div className = "subsubtitlel col-12">Floccus:</div>
                        </div>
                        <div className ="row">
                            <div className = "col-8">
                                <p>cada elemento da nuvem é constituído por um pequeno floco de aspecto cumuliforme, cuja parte inferior, esfarrapada, é comumente 
                                    acompanhada de virga (virga é quando os cristais de gelo ou as gotículas de água não conseguem mais se sustentar e caem em 
                                    forma de vírgula, sem atingir o solo). Abaixo, fotos e vídeo de Cirrocumulus floccus.</p>
                            </div>
                            <div className = "col-4">
                                <img src="img/flocus.svg" width="98%" height="auto" alt="floccus"/>
                            </div>
                        </div>

                        <div className = "row">
                            <div className = "subsubtitler col-12"><br/><br/>Lacunosus:</div>
                        </div>
                        <div className ="row">
                            <div className = "col-4">
                                <img src="img/la.svg" width="100%" height="auto" alt="lacunosus"/>
                            </div>
                            <div className = "col-8">
                                <p>apresentam-se em bancos, lençóis ou camadas, geralmente muito delicadas, caracterizadas pela presença de filtros límpidos e 
                                    arredondados, distribuídos de maneira mais ou menos regular, e dos quais vários apresentam as bordas esfiapadas. Os elementos 
                                    das nuvens e os furos límpidos estão dispostos, muitas vezes, de tal maneira, que o seu aspecto é o de uma rede ou de um favo 
                                    de mel. Abaixo, fotos de Cirrocumulus lacunosus.
                                </p>
                            </div>
                        </div>
                    </section>
                    </body>
                </Meio>
                <Pe />
            </>)}
        </>
    );
}