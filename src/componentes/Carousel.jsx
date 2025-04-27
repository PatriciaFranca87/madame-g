import './Carousel.jsx'; // Seu CSS

const logos = [
  "./public/imagens/logo1.png",
  "./public/imagens/logo3.png",
  "./public/imagens/logo5.png",
  "./public/imagens/logo4.png",
  "./public/imagens/logo7.png"
  // Adicione quantas quiser
];

export default function Carousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {[...logos, ...logos].map((src, index) => (
          <img src={src} alt={`logo-${index}`} key={index} />
        ))}
      </div>
    </div>
  );
}
