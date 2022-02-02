import styled from 'styled-components';



export const BackgroundImage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50vw;
  overflow: hidden;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
`

export const AppMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  overflow: hidden;
  font-family: 'Quicksand', sans-serif;

  &:hover {
    cursor: pointer;
  }
`