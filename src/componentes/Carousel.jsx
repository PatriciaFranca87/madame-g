import './Carousel.jsx'; // Seu CSS

const logos = [
  "imagens/logo1.png",
  "imagens/logo3.png",
  "imagens/logo5.png",
  "imagens/logo4.png",
  "imagens/logo7.png",
  "imagens/logokenner.png",
  "imagens/farmlogo.png"
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
