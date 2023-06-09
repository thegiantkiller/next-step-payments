import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconButtonPropsType } from './IconButton.types';
import { FontAwesomeIcons } from './IconButton.types';
import * as Styled from './IconButton.styles';

const IconButton = ({ name, size, color, ...attributes }: IconButtonPropsType) => {
  return (
    <Styled.Button {...attributes}>
      <FontAwesomeIcon icon={FontAwesomeIcons[name]} size={size} color={color}></FontAwesomeIcon>
    </Styled.Button>
  );
};

export default IconButton;
