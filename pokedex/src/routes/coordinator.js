export const goToHomePage = (navigate) => {
  navigate('/')
}

export const goToPokeDetail = (navigate, name) => {
  navigate(`/detalhes/${name}`)
}

export const goToPokedex = (navigate) => {
  navigate('/pokedex')
}