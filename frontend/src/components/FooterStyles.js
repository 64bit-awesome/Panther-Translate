// Modified from code by: <gurjotloveparmar> Feb 26, 2021 / GeeksForGeeks.com
// Source: https://www.geeksforgeeks.org/how-to-create-a-simple-responsive-footer-in-react-js/

import styled from 'styled-components';
   
export const Box = styled.div`
  //padding: 50px 60px;
  padding-top: 1%;
  background: #001146;
  position: fixed;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 20px 20px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: yellow;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;