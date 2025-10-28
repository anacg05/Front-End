import React from "react";
import MoviesCarousel from "../../components/MoviesCarousel/MoviesCarousel";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function ListarFilmes() {
  const filmesDestaque = [
    {
      title: "Oppenheimer",
      year: 2023,
      rating: 8.5,
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORAieVd3WE0zCe2brYIu0IP_eAbq_cksyJQ&s",
    },
    {
      title: "Barbie",
      year: 2023,
      rating: 7.8,
      poster: "https://www.europanet.com.br/upload/id_produto/107___/107344g.jpg",

    },
  ];

  const filmesAcao = [
    {
      title: "John Wick 4: Baba Yaga",
      year: 2023,
      rating: 7.2,
      poster: "https://m.media-amazon.com/images/M/MV5BMGUyMGNlM2EtODY5Yy00ZjQ2LTkyY2ItZDI3YjdjYWM2MzNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Duna: Parte 2",
      year: 2024,
      rating: 9.0,
      poster: "https://m.media-amazon.com/images/M/MV5BNzk5MTE4YTUtNGU2My00MTYxLWE5NGItODk4YWFkOWYyMjA5XkEyXkFqcGc@._V1_.jpg",
    },

    {
      title: "Velozes e Furiosos 10",
      year: 2023,
      rating: 5.9,
      poster: "https://m.media-amazon.com/images/S/pv-target-images/848a155842f8331062bd190b1584e3b152af0271468312ce6b0def838721592b.jpg",
    },
    {
      title: "Missão: Impossível – Acerto de Contas Parte Um",
      year: 2023,
      rating: 7.8,
      poster: "https://www.papodecinema.com.br/wp-content/uploads/2022/12/20230705-missao-impossivel-contas-papo-de-cinema-cartaz.webp",
    },
    {
      title: "Top Gun: Maverick",
      year: 2022,
      rating: 8.4,
      poster: "https://upload.wikimedia.org/wikipedia/pt/d/d2/Top_Gun_Maverick.jpg",
    },
    {
      title: "Resgate 2",
      year: 2023,
      rating: 7.0,
      poster: "https://br.web.img2.acsta.net/pictures/23/05/29/15/29/0726500.jpg",
    },
    {
      title: "The Equalizer 3",
      year: 2023,
      rating: 7.2,
      poster: "https://play-lh.googleusercontent.com/Cq6Xjn0XzML7nlZT7zu3oThgIlDmgSn3OgdYpyy-FHIPK9OyP1Sl_H_sZQec9IRyfTnrZPon-vs7WbGYOw4",
    },
    {
      title: "Exterminador do Futuro: Destino Sombrio",
      year: 2019,
      rating: 6.2,
      poster: "https://play-lh.googleusercontent.com/LF0iON9n_voAoEx-M_-EBtstLWpVh-JkI7ZAH1muHOaaOEjZc8f2pqd_Rc3saEpyLD3PaljXf0Ij_pssV2ot",
    },
    {
      title: "O Protetor 2",
      year: 2018,
      rating: 6.7,
      poster: "https://s2-globo-play.glbimg.com/7bSjpT_p_bwRHa1K506oIZ3WVVA=/362x536/https://s2-globo-play.glbimg.com/37_QhaqtGAHkG0U-CMnYFqg50LE=/https://s2.glbimg.com/hYZjUFrySFXtYF06P7xWyW6kIgw=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2023/F/e/2qNUmWRaeNpkpY8xHLuQ/5963012-poster.jpg",
    },
    {
      title: "Tenet",
      year: 2020,
      rating: 7.3,
      poster: "https://br.web.img3.acsta.net/pictures/20/05/19/20/45/1889845.jpg",
    },
    {
      title: "Mad Max: Estrada da Fúria",
      year: 2015,
      rating: 8.1,
      poster: "https://play-lh.googleusercontent.com/NZVX-GzNvaGUocLGSQNUtDB-H084hgOQpRIYmg_sTEYV2BQzgH0Iqm9jCJe47u3nSqA",
    },
    {
      title: "Pantera Negra: Wakanda Para Sempre",
      year: 2022,
      rating: 6.8,
      poster: "https://lumiere-a.akamaihd.net/v1/images/summer_break_pay1_brazil_fe11aaf3.jpeg",
    },
    {
      title: "Homem-Aranha: Sem Volta Para Casa",
      year: 2021,
      rating: 8.3,
      poster: "https://play-lh.googleusercontent.com/15YQW9xn9s-uqz-VNNHmXAwZGtFX-Cx8_TfvtZyGWewyzecOzLrZOpRRNuIw6Of33FCnx0BPqfHei6vrYsk=w240-h480-rw",
    },

  ];

  const filmesComedia = [
    {
      title: "The Batman",
      year: 2022,
      rating: 8.2,
      gradient: "linear-gradient(to bottom right, #1f2937, #000000)"
    },
    {
      title: "Dune: Part Two",
      year: 2024,
      rating: 9.0,
      gradient: "linear-gradient(to bottom right, #a16207, #c2410c)"
    },
  ];

  return (
    <>
      <Header />
      <MoviesCarousel title="Filmes em Destaque" movies={filmesDestaque} seeAllLink="/destaques" />
      <MoviesCarousel title="Filmes de Ação" movies={filmesAcao} seeAllLink="/acao" />
      <MoviesCarousel title="Filmes de Comédia" movies={filmesComedia} seeAllLink="/comedia" />
      <Footer />
    </>
  );
}

export default ListarFilmes;
