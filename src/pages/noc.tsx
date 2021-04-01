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
                    <section>
                        <div className="row ptx">
                            <div className="col-6">
                                <img src="img/nocf.svg" width="95%" height="auto" alt="noctulescentes1"/>
                            </div>
                            <div className="texto col-6"><p>As nuvens noturnas luminosas (ou noctilucentes) parecem-se com Cirrus 
                                tênues, mas geralmente apresentam uma coloração azulada ou prateada, algumas vezes alaranjada ou 
                                vermelha, e destacam-se sobre o fundo escuro do céu noturno. Elas são as nuvens mais altas da 
                                Terra, o que é provado em medições realizadas, que mostraram que elas se situam em altitudes entre 
                                75 e 90 quilômetros.</p></div>
                        </div>
                    </section>
                    <aside>
                        <div className=" texto col-12"><p>A constituição física das noctilucentes é ainda desconhecida, mas há certas 
                            razões para se pensar que sejam constituídas por poeiras cósmicas muito finas. Por incrível que possa 
                            parecer, evidências recentes indicam que pelo menos algumas dessas nuvens noctilucentes resultam da 
                            água congelada expelida pelos ônibus espaciais da NASA.</p></div>
                    </aside>
                    <section>
                        <div className="row">
                            <div className="texto col-6"><p>As noctilucentes só são observadas muito raramente, nos meses de verão, em 
                                latitudes entre 50º e 70º ao norte e ao sul do Equador e com o Sol entre 5º e 13º abaixo do 
                                horizonte. A primeira vez que as nuvens noctilucentes foram observadas foi em 1885, dois anos 
                                depois da erupção do vulcão Krakatoa, na ilha de Java. Abaixo, fotos de noctilucentes.
                            </p></div>
                                <div className="col-6">
                                    <img src="img/nocf2.svg" width="95%" height="auto" alt="noctulescentes2"/>
                                </div>
                        </div>
                    </section>
                    <aside className="subti">GALERIA UwU</aside>
                    <section>
                        <div className="row">
                            <div className = "col-4">
                                <img src="img/nf3.svg" width="95%" height="auto" alt="noctulescentes3"/>
                            </div>
                            <div className = "col-4">
                                <img src="img/nf4.svg" width="95%" height="auto" alt="noctulescentes4"/>
                            </div>
                            <div className = "col-4">
                                <img src="img/nf5.svg" width="95%" height="auto" alt="noctulescentes5"/>
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