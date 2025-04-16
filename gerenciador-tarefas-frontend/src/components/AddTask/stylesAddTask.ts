import styled from 'styled-components';

export const Icon = styled.div`
  position: absolute;
  top: 60px;
  right: 350px;
  z-index: 10;
  cursor: pointer;
  padding: 8px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const DialogContainer = styled.div`
  padding: 20px;
  max-Width: 400px;
  border-top: 10px solid #3f51b5;
`

export const DialogTitle= styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`
export const DialogFields= styled.div`
   display: flex;
   flex-direction: column;
   gap: 12px;
   margin-bottom: 16px;

    input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    outline: none;
    font-size: 16px;
    transition: border 0.2s ease;

    &:focus {
      border-color: #543e7c;
    }
`
export const DialogActions= styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`