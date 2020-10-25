import React from "react";
import { FaTimes, FaMapMarker, FaCity, FaClock, FaPhone } from "react-icons/fa";

import { Container, ModalMarket, Labels } from "./styles";

function Modal({ close }) {
  return (
    <Container>
      <ModalMarket>
        <div>
          <FaTimes size={16} className="text-danger" onClick={close} />
        </div>
        <div
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)`,
          }}
        ></div>
        <strong className="title">Sacolão do seu Zé</strong>
        <hr />
        <p>
          <FaMapMarker size={16} /> Av. Paulista n° 100
        </p>
        <p>
          <FaCity size={16} /> São Paulo, SP
        </p>

        <p>
          <FaClock size={16} /> 08H às 17Hrs
        </p>

        <p>
          <FaPhone size={16} /> (11) 99999-8888
        </p>
        <hr />
        <Labels>
          <strong>Items: </strong>
          <span>Vegetais</span>
          <span>Frutas</span>
          <span>Carnes</span>
        </Labels>
      </ModalMarket>
    </Container>
  );
}

export default Modal;
