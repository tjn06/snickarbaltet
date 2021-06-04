import React, {useState} from 'react'
import styled from 'styled-components';

// const StyledFormWrapper = styled.div`
//   /* display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 10px 20px;  */
//   width: 100%;
// `;

const StyledForm = styled.form`
  display: grid;
  /* flex-direction: column; */
  grid-gap: 20px;
  width: 100%;

  /* padding: 40px; */
  /* background-color: #fff; */
  /* border-radius: 10px; */
  box-sizing: border-box;
  /* box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2); */

  @media (max-width: 686px) {
    max-width: unset;
  }
`;

const StyledInput = styled.input`
  display: block;
  height: 2rem;
  font-size: 20px;
  width: 100%;
  background-color: transparent;
  color: white;
  outline: none;
  outline-style: none;
  outline-offset: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid white 2px;
  padding: 3px 0px;
  &::-webkit-input-placeholder {
  color: white;
  /* font-size: 1.2rem; */
  }
  &:-ms-input-placeholder {
  color: white;
  }
`;

const StyledTextArea = styled.textarea`
  /* background-color: #eee; */
  width: 100%;
  font-size: 20px;
  font-family: 'Jost', sans-serif;
  min-height: 100px;
  resize: none;
  background-color: transparent;
  color: white;
  outline: none;
  outline-style: none;
  outline-offset: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid white 2px;
  padding: 3px 0px;
	overflow: scroll;
	overflow-x: hidden;


&::-webkit-scrollbar-track{
	background-color: transparent;
}

&::-webkit-scrollbar{
	width: 8px;
	background-color: transparent;
}

&::-webkit-scrollbar-thumb{
	/* border-radius: 100px; */
	background-color: white;
}

  &::-webkit-input-placeholder {
  color: white;
  /* font-size: 1.2rem; */
  }
  &:-ms-input-placeholder {
  color: white;
  }
`;
const StyledButton = styled.button`
  display: block;
  width: 10rem;
  /* font-weight: 600; */
  background-color: transparent;
  color: white;
  border: 3px solid white;
  font-size: 1rem;
  font-family: 'Jost', sans-serif;
  /* border: 0; */
  /* border-radius: 5px; */
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  
`;



const StyledError = styled.span`
  color: red;
  font-weight: 500;
  
`;
const StyledSpace = styled.div`
  height: 25px;
`

const initalState = {
  namn: '',
  email: '',
  meddelande: ''
};

function Form() {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
 

    for (let key in state) {
      if (state[key] === '') {
        setError(`Du måste fylla i ${key}`)
        return
      }
    }
    setError('');

  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
  
      {/* <StyledFormWrapper> */}
        <StyledForm onSubmit={handleSubmit}>
          {/* <h2>Kontakta Oss</h2> */}
          {/* <label htmlFor="meddelande">Namn:</label> */}
          <StyledInput
          placeholder="Namn"
            type="text"
            name="namn"
            value={state.namn}
            onChange={handleInput}
          />
          {/* <label htmlFor="email">E-mail:</label> */}
          <StyledInput
          placeholder="Din mail här"
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          {/* <label htmlFor="meddelande">Meddelande</label> */}
          <StyledTextArea
          placeholder="Ditt meddelande här"
            name="meddelande"
            value={state.meddelande}
            onChange={handleInput}
          />
          <StyledSpace>
          {error ? 
              <StyledError>
                {error}
              </StyledError>
            :
            <StyledError></StyledError>
            }
          </StyledSpace>
          <StyledButton type="submit">Skicka</StyledButton>
        </StyledForm>
      {/* </StyledFormWrapper> */}
    </>
  );
}
export default Form;