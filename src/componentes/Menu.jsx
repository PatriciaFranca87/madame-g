import React from "react";
import MenuItem from './MenuItem';

const precos = {
  anaCastela1: 120.0,
  anaCastela2: 120.0,
  modare: 180.0,
  modare1: 180.0,
  modare3: 180.0,
  vizzano1: 140.0,
  vizzano2: 140.0,
  papeteMoleca1: 150.0,
  papeteMoleca2: 150.0,
  SapatilhaBg: 150.0,
  SapatilhaPta: 150.0,
  redley1: 250.0,
  redley2: 250.0,
  redley3: 250.0,
  redley4: 250.0,
  redley5: 250.0,
  redley6: 250.0,
  redley7: 250.0,
  bolsaFarm1: 120.0,
  bolsaFarm2: 120.0,
  bolsaFarm3: 120.0,
  bolsaSz2: 210.0,
  bolsaSz3: 210.0,
  bolsaMasculina: 250.0,
  bolsaMasculina1: 250.0,
  bolsaColcci: 210.0,
  bolsaSz1: 210.0,
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