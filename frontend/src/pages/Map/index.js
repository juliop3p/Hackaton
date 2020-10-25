import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactMapGL, { Marker } from "react-map-gl";
import { FaSearch, FaBars } from "react-icons/fa";

import api from "../../service/api";

import fruitImg from "../../assets/images/fruitimg.png";
import vegetableImg from "../../assets/images/vegetable.svg";
import FruitsImg from "../../assets/images/fruits.svg";
import meatImg from "../../assets/images/meat.svg";
import dietImg from "../../assets/images/diet.svg";
import healthyImg from "../../assets/images/healthyImg.svg";

import Item from "../../components/Item";
import Modal from "../../components/Modal";

import {
  Search,
  MapStyle,
  MarkerIcon,
  InputSearch,
  Hamburguer,
} from "./styles";

function Map() {
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
    {
      id: "4",
      img: dietImg,
      name: "Todas",
      active: false,
    },
  ]);

  const [viewport, setViewport] = useState({
    latitude: -23.6815314,
    longitude: -46.8755,
    width: "99.9%",
    height: "100vh",
    zoom: 13,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [alimento, setAlimento] = useState("");
  const [places, setPlaces] = useState([]);
  const [modalData, setModalData] = useState({});

  const handleCategory = (id, alimento) => {
    setAlimento(alimento);
    const loadPlaces = async () => {
      const data = await api.get(
        alimento === "Todas" ? "/lojas" : `/tipos/${alimento}`
      );
      setPlaces(alimento === "Todas" ? data.data : data.data[0].loja);
    };
    loadPlaces();
    setCategories(
      categories.map(category => {
        category.active = category.id === id ? true : false;
        return category;
      })
    );
    setIsNavOpen(false);
  };

  const handleAddress = async () => {
    const { data } = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
    );
    setViewport({
      latitude: data.features[0].center[1],
      longitude: data.features[0].center[0],
      width: "99.9%",
      height: "100vh",
      zoom: 13,
    });
    setIsNavOpen(false);
  };

  const handleModal = place => {
    setModalData(place);
    setIsModalOpen(true);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setViewport({
          latitude: latitude,
          longitude: longitude,
          width: "99.9%",
          height: "100vh",
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

  useEffect(() => {
    const loadPlaces = async () => {
      const data = await api.get("/lojas");
      setPlaces(data.data);
    };
    loadPlaces();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {isModalOpen && (
          <Modal
            close={() => setIsModalOpen(false)}
            data={modalData}
            alimento={alimento}
          />
        )}
        <Search className={isNavOpen ? "col d-flex" : "col-4 d-md-flex d-none"}>
          <div>
            <InputSearch>
              <input
                type="text"
                placeholder="Digite sua localização"
                value={address}
                onChange={event => setAddress(event.target.value)}
              />
              <button onClick={handleAddress}>
                <FaSearch size={16} />
              </button>
            </InputSearch>
            <hr className="mt-4" />
            <div className="container">
              <div className="row">
                {categories.map(category => (
                  <Item
                    key={category.id}
                    category={category}
                    handleClick={handleCategory}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="d-flex flex-column">
            <img src={healthyImg} alt="Healthy" className="mb-3" />
            <Link to="/create-point">Cadastre um novo local</Link>
          </div>
        </Search>
        <MapStyle className="col">
          <Hamburguer
            className="d-md-none d-flex"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <FaBars size={24} />
          </Hamburguer>
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/juliop3p/ckgnykuqn0mef1aqoir873wzv"
            onViewportChange={viewport => setViewport(viewport)}
          >
            {places.map(place => (
              <Marker
                latitude={Number(place.latitude)}
                longitude={Number(place.longitude)}
                key={place.id}
              >
                <MarkerIcon onClick={() => handleModal(place)}>
                  <img src={fruitImg} alt="Sacolão do seu Zé" />
                </MarkerIcon>
              </Marker>
            ))}
          </ReactMapGL>
        </MapStyle>
      </div>
    </div>
  );
}

export default Map;
