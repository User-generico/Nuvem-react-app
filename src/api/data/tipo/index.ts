import api from "../../index";
import {InterTipo} from "../../../styles/Interfaces/Tipo.Interface";
class TipoData {
    index(){
        return api.get<InterTipo[]>("TipoDeNuvem");
    }
}
export default new TipoData();