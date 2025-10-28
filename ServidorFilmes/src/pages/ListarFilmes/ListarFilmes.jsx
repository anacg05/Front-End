import React from "react";
import MoviesCarousel from "../../components/MoviesCarousel/MoviesCarousel";
import Header from "../../components/Header/Header";

function ListarFilmes() {
  const filmesDestaque = [
    { title: "Oppenheimer", year: 2023, rating: 8.5, gradient: "linear-gradient(to bottom right, #ea580c, #dc2626)" },
    { title: "Barbie", year: 2023, rating: 7.8, gradient: "linear-gradient(to bottom right, #ec4899, #db2777)" },
  ];

  const filmesAcao = [
    { title: "The Batman", year: 2022, rating: 8.2, gradient: "linear-gradient(to bottom right, #1f2937, #000000)" },
    { title: "Dune: Part Two", year: 2024, rating: 9.0, gradient: "linear-gradient(to bottom right, #a16207, #c2410c)" },
  ];

  const filmesComedia = [
    { title: "The Batman", year: 2022, rating: 8.2, gradient: "linear-gradient(to bottom right, #1f2937, #000000)" },
    { title: "Dune: Part Two", year: 2024, rating: 9.0, gradient: "linear-gradient(to bottom right, #a16207, #c2410c)" },
  ];

  return (
    <>
      <Header />
      <MoviesCarousel title="Filmes em Destaque" movies={filmesDestaque} seeAllLink="/destaques" />
      <MoviesCarousel title="Filmes de Ação" movies={filmesAcao} seeAllLink="/acao" />
      <MoviesCarousel title="Filmes de Comédia" movies={filmesComedia} seeAllLink="/comedia" />
    </>
  );
}

export default ListarFilmes;
