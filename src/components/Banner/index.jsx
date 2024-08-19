import React from "react";
import { Container, Text } from "./styles";
import { Link } from "react-router-dom";


const Banner = () => {

  const userLogged = localStorage.getItem('Yt');

  return (
    <Container>
      <Text>
        <h2>Descubra a beleza do seu próximo apartamento</h2>
        <p>Milhares de pessoas têm os seus apartamentos à venda. Não perca a oportunidade de ter a sua própria casa hoje.</p>
        <li><Link to='/cadastro'><span>Cadastre seu anúncio</span></Link></li>
      </Text>
    </Container>
  )
}

export default Banner;
