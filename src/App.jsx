import { useState } from 'react'
import './app.css'
import './stylesProf.css' 
import Carousel from './componentes/Carousel'
import Catalogo from './componentes/Catalogo'



function App() {

    
  return (
  <>
      <div className="social-icons">
            <a href="https://wa.me/5521991495081" target="_blank" class="whatsapp-link"><i class="fab fa-whatsapp"></i></a>
            <a href="https://www.instagram.com/madamegsapatos?igsh=OGptdWdnOW9uYjZ6" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="mailto:Madamegsapatos@gmail.com?subject=Fale%20Conosco"><i class="far fa-envelope"></i></a>
        </div> 
      
      <div class="titulo-Catalogo"> 
        <img src="./public/imagens/logo.png" alt="Foto da pessoa" class="fotoSuperior"></img>
        <h1>MADAME G</h1>
        <p>Bolsas - Calçados - Acessórios</p>        
      </div>

      <Carousel />

      {/*
      <div classe="carousel-container">
        <div class="carousel-track">
          <img src="./public/imagens/logo1.png" alt="moleca" />
          <img src="./public/imagens/logo3.png" alt="beira-rio"/>
          <img src="./public/imagens/logo5.png" alt="vizzano" />
          <img src="./public/imagens/logo7.png" alt="modare" /> 
          <img src="./public/imagens/logo4.png" alt="redley" />
        </div>
      </div>

          
    </div>


    {/*<div class="menu-container">*/}           
    <Catalogo/>
    {/*</div>*/}

    <div className='info'>
        <img src='./public/imagens/entrega.png' class="entrega"/>
        <img src='./public/imagens/cartao.png' class="cartao"/>
        <h3>Receba no conforto de casa</h3>
        <h3>Aceitamos cartões</h3>
        <p>Fala conosco pelos canais de atendimento</p>
        
        <div className="social-icons">
            <a href="https://wa.me/5521991495081" target="_blank" class="whatsapp-link"><i class="fab fa-whatsapp"></i></a>
            <a href="https://www.instagram.com/madamegsapatos?igsh=OGptdWdnOW9uYjZ6" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="mailto:Madamegsapatos@gmail.com?subject=Fale%20Conosco"><i class="far fa-envelope"></i></a>
        </div> 

    </div>




      <footer>
        <p>Desenvolvido por<a href="https://github.com/PatriciaFranca87" target="_blank">  Patrícia França</a> no Curso de Programador Front-End no Senai Maracanã. Todos os direitos reservados - 2025.</p>

      </footer>
    
    </>
  )
}

export default App
