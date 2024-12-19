import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import defaultImage from "../../../assets/defaultImage.png";

interface CarouselComponentProps {
  photos: Array<{ src: string; alt: string }>;
}

export default function CarouselComponent({ photos }: CarouselComponentProps) {
  const mainSliderRef = useRef<Slider | null>(null);
  const thumbSliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    // Garante que o componente seja sincronizado após a montagem
    if (mainSliderRef.current && thumbSliderRef.current) {
      mainSliderRef.current.slickGoTo(0); // Vai para a primeira imagem por segurança
      thumbSliderRef.current.slickGoTo(0);
    }
  }, [photos]);

  // Se não houver fotos, exibe a imagem padrão
  if (!photos || photos.length === 0) {
    return (
      <div className="slider-container">
        <img
          src={defaultImage}
          alt="Default Image"
          style={{
            width: "100%",
            height: "300px", // Altura ajustada para o slider principal
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>
    );
  }

  // Condição para renderizar o slider secundário somente se houver mais de uma imagem
  const showThumbSlider = photos.length > 1;

  return (
    <div className="slider-container">
      {/* Slider principal para exibir a imagem selecionada */}
      <Slider
        asNavFor={showThumbSlider ? (thumbSliderRef.current as Slider) : undefined}
        ref={mainSliderRef}
        arrows={true}
        infinite={false}
        draggable={false}
        beforeChange={(current, next) => {
          // Atualiza o slider secundário para focar na miniatura correspondente
          thumbSliderRef.current?.slickGoTo(next);
        }}
      >
        {photos.map((photo, index) => (
          <div key={index}>
            <img
              src={photo.src}
              alt={photo.alt}
              style={{
                width: "100%",
                height: "300px", // Altura ajustada para o slider principal
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>
        ))}
      </Slider>

      {/* Condicionalmente renderiza o slider secundário, apenas se houver mais de uma imagem */}
      {showThumbSlider && (
        <Slider
          asNavFor={mainSliderRef.current || undefined}
          ref={thumbSliderRef}
          slidesToShow={photos.length < 1 ? photos.length : 3} // Mostra até 3 miniaturas
          swipeToSlide={true}
          focusOnSelect={true}
          infinite={true}
          centerMode={false}
          beforeChange={(current, next) => {
            // Atualiza o slider principal ao clicar na miniatura
            mainSliderRef.current?.slickGoTo(next);
          }}
        >
          {photos.map((photo, index) => (
            <div key={index}>
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: "100%",
                  height: "100px", // Altura ajustada para o slider de miniaturas
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: "4px",
                  border: "0px solid transparent",
                }}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
