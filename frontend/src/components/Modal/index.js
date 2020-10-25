import React from "react";
import { FaTimes, FaMapMarker, FaCity, FaClock, FaPhone } from "react-icons/fa";

import { Container, ModalMarket, Labels } from "./styles";

function Modal({ close, data }) {
  return (
    <Container>
      <ModalMarket>
        <div>
          <FaTimes size={16} className="text-danger" onClick={close} />
        </div>
        <div
          style={{
            backgroundImage: `url(${data.imagem})`,
          }}
        ></div>
        <strong className="title">{data.nome}</strong>
        <hr />
        <p>
          <FaMapMarker size={16} /> {data.rua}
        </p>
        <p>
          <FaCity size={16} /> {data.cidade}
        </p>

        <p>
          <FaClock size={16} /> {data.horario}
        </p>

        <p>
          <FaPhone size={16} /> {data.telefone}
        </p>
        <hr />
        <Labels>
          <strong>Items: </strong>
          <span>{data.alimento.tipo}</span>
        </Labels>
      </ModalMarket>
    </Container>
  );
}

export default Modal;
