import {ConteinerProduto} from './styled'
import Categorias  from '../../components/Categorias/categoria'



export default function Produtos() {
    return(

        <ConteinerProduto>
            <div className = "Produtos">
             <Categorias/>
             <div className = "ListaProdutos">
             <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/bolinho.png" alt="" width="200" height = "150" /> </div>
                 <div className = "Produto"> Bolinho </div>

                 <div className = "Avaliacao">
                  <img src= "./assets/imagens/estrela.png" width = "10"  height = "10" alt =""/> 
                  <img src= "./assets/imagens/estrela.png" width = "10"  height = "10" alt =""/> 
                  <img src= "./assets/imagens/estrela.png" width = "10"  height = "10" alt =""/> 
                  <img src= "./assets/imagens/estrela.png" width = "10"  height = "10" alt =""/> 
                  <img src= "./assets/imagens/estrela.png" width = "10"  height = "10" alt =""/> 
                  
                 </div>

                 <div className = "Preco">Valor: 2,50 R$ </div>
                 <div className = "botão-compra"> <button> COMPRA </button> </div>
                   
                  </div>
                </div>
              </div>





         
        </ConteinerProduto>
    )
    
}