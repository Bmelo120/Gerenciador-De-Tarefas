import styled from 'styled-components';


export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  color: #fff;
  font-weight: bold;
  margin: 40px 0;
`

export const List = styled.div`
  background-color: #3f51b5;
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 16px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 600px;
  margin: 16px auto;
  margin-left: 300px;

    transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.02);
  }

`