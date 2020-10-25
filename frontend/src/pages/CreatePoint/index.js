import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import ReactMapGL, { Marker } from "react-map-gl";
import { FaArrowLeft } from "react-icons/fa";

import fruitImg from "../../assets/images/fruitimg.png";
import vegetableImg from "../../assets/images/vegetable.svg";
import FruitsImg from "../../assets/images/fruits.svg";
import meatImg from "../../assets/images/meat.svg";
import registerImg from "../../assets/images/register.svg";

import api from "../../service/api";

import { Container, MarkerIcon, Image } from "./styles";
import Item from "../../components/Item";

function CreatePoint() {
  const history = useHistory();
  const [categories, setCategories] = useState([
    {
      id: "1",
      img: vegetableImg,
      name: "Vegetais",
      active: false,
    },
    {
      id: "2",
      img: FruitsImg,
      name: "Frutas",
      active: false,
    },
    {
      id: "3",
      img: meatImg,
      name: "Carnes",
      active: false,
    },
  ]);
  const [viewport, setViewport] = useState({
    latitude: -23.6815314,
    longitude: -46.8755,
    width: "100%",
    height: "300px",
    zoom: 15,
  });
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [rua, setRua] = useState("");
  const [cidade, setCidade] = useState("");
  const [horario, setHorario] = useState("");
  const [imagem, setImagem] = useState("");
  const [id, setId] = useState(0);
  const [locationMarked, setLocationMarked] = useState([-23.6815314, -46.8755]);

  const handleLocationUser = coords => {
    setLocationMarked(coords);
  };

  const handleCategory = (id, vegetais) => {
    setId(id);
    setCategories(
      categories.map(category => {
        category.active = category.id === id ? true : false;
        return category;
      })
    );
  };

  const handlePost = async event => {
    event.preventDefault();
    await api.post("/lojas", {
      nome,
      telefone,
      latitude: locationMarked[1],
      longitude: locationMarked[0],
      rua,
      cidade,
      horario,
      imagem,
      alimento: {
        id,
      },
    });
    console.log("here");
    history.push("/map");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setViewport({
          latitude: latitude,
          longitude: longitude,
          width: "100%",
          height: "300px",
          zoom: 13,
        });
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  return (
    <Container className="container-fluid">
      <div className="row justify-content-center">
        <Image src={registerImg} alt="Register" />
        <div className="col-md-10 col-lg-8 col-xlg-6 col margin-auto my-5">
          <form className="card">
            <div className="row align-items-center ">
              <Link to="/map">
                <FaArrowLeft size={24} />
              </Link>
              <h1 className="text-secondary">Registre seu local</h1>
            </div>
            <input
              type="text"
              className="form-control-lg mt-4"
              id="name"
              placeholder="Nome do estabelecimento"
              onChange={event => setNome(event.target.value)}
              value={nome}
            />

            <input
              type="text"
              className="form-control-lg mt-4"
              id="address"
              placeholder="Nome da rua"
              onChange={event => setRua(event.target.value)}
              value={rua}
            />

            <input
              type="text"
              className="form-control-lg mt-4"
              id="city"
              placeholder="Nome da Cidade"
              onChange={event => setCidade(event.target.value)}
              value={cidade}
            />

            <input
              type="text"
              className="form-control-lg mt-4"
              id="time"
              placeholder="Horario de atendimento"
              onChange={event => setHorario(event.target.value)}
              value={horario}
            />

            <input
              type="text"
              className="form-control-lg mt-4"
              id="image"
              placeholder="Imagem do local"
              onChange={event => setImagem(event.target.value)}
              value={imagem}
            />

            <input
              type="text"
              className="form-control-lg mt-4"
              id="phone"
              placeholder="Telefone"
              onChange={event => setTelefone(event.target.value)}
              value={telefone}
            />

            <div className="card mt-5">
              <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/juliop3p/ckgnykuqn0mef1aqoir873wzv"
                onViewportChange={viewport => setViewport(viewport)}
                onClick={event => handleLocationUser(event.lngLat)}
              >
                {
                  <Marker
                    latitude={locationMarked[1]}
                    longitude={locationMarked[0]}
                  >
                    <MarkerIcon>
                      <img src={fruitImg} alt="Sacolão do seu Zé" />
                    </MarkerIcon>
                  </Marker>
                }
              </ReactMapGL>
            </div>
            <small className="text-danger">Selecione no mapa seu local</small>

            <div className="row mt-4">
              {categories.map(category => (
                <Item
                  key={category.id}
                  category={category}
                  handleClick={handleCategory}
                />
              ))}
            </div>

            <button
              type="submit"
              className="btn btn-success mt-4"
              onClick={handlePost}
            >
              <strong>Enviar</strong>
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default CreatePoint;
