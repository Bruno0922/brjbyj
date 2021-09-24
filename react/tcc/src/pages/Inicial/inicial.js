import { ConteinerInicial } from './styled'

export default function Inicial () {

    return (

        <ConteinerInicial> 
        <div className= 'cabecalho'>
            <div className="filho">
                <div className= 'cabe'>
                HOME
                </div>
                <div className= 'cabe'>
                SOBRE NÓS
                </div>
                <div className= 'cabe'>
                MENU
                </div>
            </div>
            <div className = 'filho1'>
            <div className= 'barra'>
            <svg width="4" height="50" viewBox="0 0 8 84" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="4" height="84" fill="#444444"/></svg>
            </div>
            <div className= 'Lup-img'>
            <img src="./assets/imagens/lupa.png" height="25" alt="" />
            </div>

            <div className= 'barra'>
            <svg width="4" height="50" viewBox="0 0 8 84" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="4" height="84" fill="#444444"/></svg>
            </div>

            <div className= 'cadastro'>
            <img src="./assets/imagens/logo de user.png" height="25" alt="" />
            </div>
            <div className= 'Cabecho'>
                Entre / Cadastro
            </div>
            <div className= 'barra'>
            <svg width="4" height="50" viewBox="0 0 8 84" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="4" height="84" fill="#444444"/></svg>
            </div>
            <div className= 'carrinho'> 
            <img src="./assets/imagens/mbricartadd_99553.svg" alt="" />
            </div>
            </div>

        </div>
         </ConteinerInicial>
    )
}