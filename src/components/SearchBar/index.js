import React from 'react'
import * as S from './styles'
//assets
import MagnifyingGlassIcon from 'assets/icons/magnifying-glass.svg'

const SearchBar = () => {
  return (
    <S.InputContainer>
      <input type="text" placeholder="O que você está procurando?" />
      <button type="submit">
          <img src={MagnifyingGlassIcon} alt="Buscar" title="Buscar" />
      </button>
    </S.InputContainer>
  )
}

export default SearchBar