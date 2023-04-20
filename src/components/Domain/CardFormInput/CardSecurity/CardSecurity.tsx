import type { CardSecurityProps } from './CardSecurity.types';
import * as Styled from './CardSecurity.styles';
import { KeyBoardIconButton, HelpIcon } from '../../../UI';

const CardSecurity = ({ fontColor, refs, setVirtualKeyBoardUI }: CardSecurityProps) => {
  return (
    <Styled.Layout>
      <Styled.Title fontSize="xs" weight="bold" label="보안코드 (CVC/CVV)" />
      <Styled.Container>
        <Styled.Box>
          <Styled.CardSecurityInput
            theme="primary"
            type="password"
            ref={(ref) => (refs.cvc = ref)}
            fontColor={fontColor}
            active={true}
            disabled={true}
          />
          <HelpIcon>카드 뒤 3자리</HelpIcon>
          <KeyBoardIconButton onClick={() => setVirtualKeyBoardUI('cvc')} />
        </Styled.Box>
      </Styled.Container>
    </Styled.Layout>
  );
};

export default CardSecurity;
