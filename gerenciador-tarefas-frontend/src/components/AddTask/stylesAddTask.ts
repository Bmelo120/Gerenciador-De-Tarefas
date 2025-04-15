import styled from 'styled-components';

export const Icon = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10;
  cursor: pointer;
`

export const DialogContainer = styled.div`
  padding: 20px;
  max-Width: 400px;
  border-top: 10px solid #eb7423;
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
`
export const DialogActions= styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`