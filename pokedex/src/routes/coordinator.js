
export  const irParaPokedex= (navigate) =>{
    navigate('/pokedex')
}
export  const irParaDetalhes = (navigate, pokeName) =>{
    navigate(`/pokemon/${pokeName}/details`)
}
export const irParaHome = (navigate) =>{
  navigate('/')
}

export const prevPage = (navigate) => {
  navigate(-1)
}