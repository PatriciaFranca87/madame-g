import React, { useState } from "react";
import './stylesProf.css';
import Menu from './componentes/Menu';
import Carousel from "./componentes/Carousel";



function App() {
  const [pedido, setPedido] = useState({});

  // Atualiza o pedido
  const handleQuantidadeChange = (key, preco, quantidade) => {
    setPedido((prev) => {
      const novo = { ...prev };
      if (quantidade > 0) novo[key] = { preco, quantidade };
      else delete novo[key];
      return novo;
    });
  };

  // Calcula o total
  const totalPrice = Object.values(pedido)
    .reduce((sum, item) => sum + item.preco * item.quantidade, 0)
    .toFixed(2);

  // Finaliza pedido
  const finalizarPedido = () => {
    if (Object.keys(pedido).length === 0) {
      alert("Seu pedido está vazio!");
      return;
    }
    if (!window.confirm("Tem certeza que seu pedido está completo?")) return;

    // Monta mensagem com quebras de linha reais
    let msg = "Olá, seu pedido foi confirmado. Obrigado por escolher Madame G!\n\n";
    Object.entries(pedido).forEach(([key, { preco, quantidade }]) => {
      const nomeFormatado = key
        .replace(/([A-Z])/g, " $1")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      msg += `${nomeFormatado} x${quantidade} = R$ ${(preco * quantidade).toFixed(2)}\n`;
    });
    msg += `\nTotal: R$ ${totalPrice}`;

    const telefone = "5521991495081";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <>
    
    <div className="conteudo">
      {/* Ícones das redes sociais */}
      <div className="social-icons">
            <a href="https://wa.me/5521991495081" target="_blank" class="whatsapp-link"><i class="fab fa-whatsapp"></i></a>
            <a href="https://www.instagram.com/madamegsapatos?igsh=OGptdWdnOW9uYjZ6" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="mailto:Madamegsapatos@gmail.com?subject=Fale%20Conosco"><i class="far fa-envelope"></i></a>
        </div> 


     <div class="titulo-Catalogo"> 
        <img src="imagens/logo.png" alt="Foto da pessoa" class="fotoSuperior"></img>
        <h1>MADAME G</h1>
        <p>Bolsas - Calçados - Acessórios</p>        
      </div>

      <Carousel />

        
       <div className='info'>
         <img src='imagens/entrega.png' class="entrega"/>
         <img src='imagens/cartao.png' class="cartao"/>
         <h3>Receba no conforto de casa</h3>
         <h3>Aceitamos cartões</h3>              
       </div>

      <div>
          <Menu
            pedido={pedido}
            onQuantidadeChange={handleQuantidadeChange}
          />

          <div className="order-summary">
            <h2>Resumo do Pedido</h2>
            <ul>
              {Object.keys(pedido).length === 0 ? (
                <li>Nenhum item selecionado</li>
              ) : (
                Object.entries(pedido).map(([key, { preco, quantidade }]) => {
                  const nomeFormatado = key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/\b\w/g, (c) => c.toUpperCase());
                  return (
                    <li key={key}>
                      {nomeFormatado} x{quantidade} = R$ {(preco * quantidade).toFixed(2)}
                    </li>
                  );
                })
              )}
            </ul>
            <h3>Total: R$ {totalPrice}</h3>
            <div className="botoes">
              <button id="finalizarPedido" onClick={finalizarPedido}>
                Finalizar Pedido
              </button>
              <button
                id="limparPedido"
                onClick={() => window.location.reload()}
              >
                Limpar Pedido
              </button>
            </div>
          </div>
        </div>
        
      
      <footer>
      <p>Desenvolvido por<a href="https://github.com/PatriciaFranca87" target="_blank">  Patrícia França</a> no Curso de Programador Front-End no Senai Maracanã. Todos os direitos reservados - 2025.</p>

      </footer>
      </div>
      </>
     );
}

export default App;