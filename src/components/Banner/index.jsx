import React from "react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { styled } from "styled-components";
import banner1 from "./banner1.png";
import banner2 from "./banner2.png";

const Img = styled.img`
  margin: 2rem 0;
  width: 100%;
  min-height: 200px;
`;

export default function Banner() {
  return (
    <Swiper modules={[Navigation, Autoplay]} loop={true} autoplay={{ delay: 3000 }} slidesPerView={1} navigation>
      <SwiperSlide>
        <Img
          src={banner1}
          alt="Descrição Financia seu Imóvel e os telefones do fale conosco: 35-9-9150-9040, 35-9-9823-4850, 35-9-9898-5310, fundo verde do lado esquerdo uma faixa preta, desenho de uma mão segurando uma casa do lado direito"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Img
          src={banner2}
          alt="Descrição dos serviços prestados, Administração, Avaliações, Contratos, Compra e Venda, imagem de fundo de uma casa e do lado direito três circulos com desenhos de dentro, de uma casa, de um contrato e de uma mão com uma casa em cima"
        />
      </SwiperSlide>
    </Swiper>
  );
}
