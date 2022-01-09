import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { PropsType } from './SecondaryButton.interfaces'

/*---> Components <---*/
const SecondaryButton = ({ children, ...restProps }: PropsType) => {
  return (
    <ButtonWrapper>
      <StyledButton {...restProps} variant='contained' color='secondary'>
        {children}
      </StyledButton>
    </ButtonWrapper>
  )
}

/*---> Styles <---*/
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const StyledButton = styled(Button)`
  width: 220px !important;
  height: 70px !important;
  padding: 0 12px !important;
  border-radius: 10px !important;
  text-transform: initial !important;
  color: white !important;
  font-size: 24px !important;
  margin-left: 30px !important;
`

export default SecondaryButton
