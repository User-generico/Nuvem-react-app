import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import {Header, Loading, Pe} from "../componets";
import {Meio} from "../styles/Index";

export default function Home() {
    const [IsLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },4000);
    });
    return (
        <>
            {IsLoading ? (<Loading />): 
            (<><Header /> 
            <Meio>
                <body>
                    <section>
                        <div className ="row"> 
                            <div className="col-3"><p>aaa</p></div>
                            <div className="col-6">
                                <p className = "title">NUVENS</p>
                            </div>
                            <div className = "col-3"><p></p></div>
                        </div>
                        <div className="row">
                            <div className="col-3"><p></p></div>
                            <div className="col-6">
                                <p className = "sub-title">DESCUBRA TIPOS DE NUVENS E O QUE ELAS SIGNIFICAM</p>
                            </div>
                            <div className="col-3"><p></p></div>
                        </div>
                    </section>
                </body> 
            </Meio>
            <Pe />
            </>)}
            
        </>
    );
}