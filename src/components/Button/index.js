import { ButtonContainer } from './styles'

function Button({label,onclick,style}) {
    return (
      <ButtonContainer onClick={onclick} style={style}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;