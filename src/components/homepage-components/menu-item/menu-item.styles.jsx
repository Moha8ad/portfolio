import styled from 'styled-components';

export const Image = props => {
  const {
    alt,
    ...otherProps
  } = props;

  return (
    <img alt={alt} {...otherProps} />
  );
}

export const BackgroundImage = styled.div`
    min-width: 100%;
    background-position: center;
    transition: transform 2s ease-in-out;
`
  
export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: rgba(5, 5, 5, 0.7);
  opacity: 0.2;
  position: absolute;
  transition: opacity 1s ease-in-out;
`

export const Title = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 2.5rem;
  color: #ffffff;
`
export const Subtitle = styled.div`
  font-weight: lighter;
  font-size: 1.4rem;
  color: #ffffff;
`

export const AppMenu  = styled.div `
  display: flex;
  width: 100vw;
  max-height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: 'Quicksand', sans-serif;
  overflow: hidden;
  position: sticky;

  &:hover {
    cursor: pointer;
    
    ${BackgroundImage} {
      transform: scale(1.02); 
    }

    ${Content} {
      opacity: 0.8;
    }
  }
`