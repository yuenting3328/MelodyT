import styled from 'styled-components';
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;

export const Button = styled.div`
   position: fixed; 
   display:flex;
   margin-left: 10px;
   width: 48px;
   height:48px;
   right: 2%; 
   bottom: 40px;
   z-index: 1;
   border-radius:100px;
   background:white;
   color: #8F9398;
   filter: drop-shadow( .2rem .2rem 10px rgba(0, 0, 0, 0.5));
   justify-content:center;
   align-items:center;
`