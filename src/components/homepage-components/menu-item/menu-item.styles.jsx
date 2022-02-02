import styled from 'styled-components';



export const BackgroundImage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 2rem;
  background-color: rgba(5, 5, 5, 0.7);
  opacity: 0.2;
  transition: opacity 1s ease-in-out;
`
export const Title = styled.div`
  padding-bottom: 5px;
  font-weight: 600;
  font-size: 2.5rem;
  color: #ffffff;
`
export const Subtitle = styled.div`
  font-weight: lighter;
  font-size: 1.4rem;
  color: #ffffff;
`
export const AppMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  position: sticky;
  overflow: hidden;
  font-family: 'Quicksand', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  transition: transform 1s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.02); 

    ${Content} {
      opacity: 0.8;
    }
  }
`