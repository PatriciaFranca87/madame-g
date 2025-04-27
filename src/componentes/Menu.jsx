import React from "react";
import MenuItem from './MenuItem';

const precos = {
  anaCastelaBg: 120.0,
  anaCastelaPt: 120.0,
  papeteMolecaBco: 150.0,
  papeteMolecaPta: 150.0,
  SapatilhaBg: 150.0,
  SapatilhaPta: 150.0,
  vizzanoBco: 140.0,
  vizzanoBg: 140.0,
  redleyCza: 250.0,
  redleyPtBco: 250.0,
  redleyPt: 250.0,
  redleyVd: 250.0,
  redleyVdBco: 250.0,
  redleyVm: 250.0,
  redleyBg: 250.0,
  bolsaFarm: 120.0,
  bolsaFarmBc: 120.0,
  bolsaFarmBg: 120.0,
  bolsaGrande: 210.0,
  bolsaGrande1: 210.0,
  bolsaMasculina: 250.0,
  bolsaMasculina: 250.0,
  bolsaColcci: 210.0,
  bolsaSz2: 210.0,
  kit2Bolsas: 200.0,
  kit3Bolsas: 300.0,
};

function Menu({ pedido, onQuantidadeChange }) {
  return (
    <div className="menu-container">
      {Object.keys(precos).map((key) => {
        const nomeFormatado = key
          .replace(/([A-Z])/g, " $1")
          .replace(/\b\w/g, (c) => c.toUpperCase());
        const quantidade = pedido[key]?.quantidade || 0 ;

        return (
          <MenuItem
            key={key}
            nome={nomeFormatado}
            preco={precos[key]}
            imagem={`imagens/${key}.png`}
            quantidade={quantidade}
            onQuantidadeChange={(qtd) => onQuantidadeChange(key, precos[key], qtd)}
          />
        );
      })}
    </div>
  );
}

export default Menu;