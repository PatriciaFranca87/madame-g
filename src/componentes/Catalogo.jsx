import React from "react";

const itens = [
    { nome: "Sapatilha Moleca", preco: 150.0, imagem: "/imagens/molecaSap1.png"},
    { nome: "Sapatilha Moleca", preco: 150.0, imagem: "/imagens/molecaSap2.png"},
    { nome: "Sapatilha Moleca", preco: 150.0, imagem: "/imagens/molecaSap3.png"},
    { nome: "Sapatilha Moleca", preco: 150.0, imagem: "/imagens/molecaSap4.png"},
    { nome: "Sandalha Moleca", preco: 150.0, imagem: "/imagens/papeteMoleca1.png"},
    { nome: "Sandalha Moleca", preco: 150.0, imagem: "/imagens/papeteMoleca2.png"},
    { nome: "Vizzano", preco: 140.0, imagem: "/imagens/vizzano1.png"},
    { nome: "Vizzano", preco: 140.0, imagem: "./public/imagens/vizzano2.png"},
    { nome: "Sapatilha Ana Castela", preco: 120.0, imagem: "./public/imagens/anaCastela1.png"},
    { nome: "Sapatilha Ana Castela", preco: 120.0, imagem:"./public/imagens/anaCastela2.png" },
    { nome: "redley", preco: 250.0, imagem: "./public/imagens/redley1.png"},
    { nome: "redley", preco: 250.0, imagem: "./public/imagens/redley2.png"},
    { nome: "redley", preco: 250.0, imagem: "./public/imagens/redley3.png"},
    { nome: "redley", preco: 250.0, imagem: "./public/imagens/redley4.png"},
    { nome: "redley", preco: 250.0, imagem: "./public/imagens/redley5.png"},
    { nome: "redley", preco: 250.0, imagem: "./public/imagens/redley6.png"},
    { nome: "redley", preco: 250.0, imagem: "./public/imagens/redley7.png"},
    { nome: "bolsa Flamengo", preco: 250.0, imagem: "./public/imagens/bolsaMasculina.png" },
    { nome: "bolsa Flamengo", preco: 250.0, imagem: "./public/imagens/bolsaMasculina1.png" },
    { nome: "Bolsa Colcci ", preco: 210.0, imagem: "./public/imagens/bolsaColcci.png" },
    { nome: "Bolsa louis vuitton ", preco: 210.0, imagem: "./public/imagens/bolsaLV.png" },
    { nome: "Bolsa Fram", preco: 120.0, imagem: "./public/imagens/bolsaFarm1.png" },
    { nome: "Bolsa Farm", preco: 120.0, imagem: "./public/imagens/bolsaFarm2.png" },
    { nome: "Bolsa Farm", preco: 120.0, imagem: "./public/imagens/bolsaFarm3.png" },
    { nome: "Bolsa de couro ", preco: 210.0, imagem: "./public/imagens/bolsaSz1.png" },
    { nome: "Bolsa de couro ", preco: 210.0, imagem: "./public/imagens/bolsaSz2.png" },
    { nome: "Kit 2 Bolsas", preco: 200.0, imagem: "./public/imagens/kit2Bolsas.png" },
    { nome: "Kit 3 Bolsas", preco: 300.0, imagem: "./public/imagens/kit3Bolsas.png" },
];

function Catalogo(){
    return(
        <div className="menu-container">
            {itens.map((item, index) => (
                <div key={index} className="menu-item">
                    <h3> {item.nome}  </h3>
                    <p>R$ {item.preco.toFixed(2)}  </p>
                   {/*  <input type="number" className="quantidade-input" placeholder="qtde." />*/}
                    <img src={item.imagem} className="menu-item img"></img>
                </div>
            ))
            }
        </div>
    )
}

export default Catalogo;