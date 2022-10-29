import { useState } from 'react';
import {
  SearchButton,
  SearchFormStyled,
  SearchInput,
  ButtonLabelStyled,
} from './SearchForm.styled';

const SearchForm = ({ onSubmit, placeHolder }) => {
  const [querry, setQuerry] = useState('');

  const onInput = e => {
    setQuerry(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if (querry.trim() === ``) {
      return;
    }
    onSubmit(querry);
  };

  return (
    <SearchFormStyled onSubmit={onSubmitForm}>
      <SearchInput type="text" onChange={onInput} placeholder={placeHolder}/>
      <SearchButton type="submit">
        <ButtonLabelStyled />
      </SearchButton>
    </SearchFormStyled>
  );
};

export default SearchForm;
