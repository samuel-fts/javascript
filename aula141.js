import { Login } from "./login.js";
import { Cxmsg } from "./cxmsg.js";

const callback_naook=()=>{
    Cxmsg.mostrar();
}

const callback_ok=()=>{
    alert("ok");

}

Login.login(callback_ok,callback_naook);