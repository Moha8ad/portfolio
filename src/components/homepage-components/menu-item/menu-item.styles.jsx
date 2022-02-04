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
  width: 100%;
  transition: transform 2s ease-in-out;
`
  
export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(5, 5, 5, 0.7);
  opacity: 0.2;
  position: absolute;
  transition: opacity 1s ease-in-out;
`

export const Title = styled.div`
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 5vw;
  text-align: center;
  color: #ffffff;
`

export const Subtitle = styled.div`
  font-weight: lighter;
  font-size: 2vw;
  text-align: center;
  color: #ffffff;
`

export const AppMenu  = styled.div`
  display: flex;
  width: 100vw;
  max-height: 100vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: sticky;
  font-family: 'Quicksand', sans-serif;

  top: 0;

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