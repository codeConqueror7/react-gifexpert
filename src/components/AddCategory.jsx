import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChanges = ({ target }) => {
    setInputValue( target.value );
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1 ) return;

    // setCategories( c => [inputValue, ...c ]);
    onNewCategory( inputValue.trim() );
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit } >
      <input
      type="text"
      placeholder="Buscar Gifs"
      value={ inputValue }
      onChange={ onInputChanges }
      />
    </form>
  )
}
