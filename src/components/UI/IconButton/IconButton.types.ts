import type { ButtonHTMLAttributes } from 'react';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faM,
  faCircleQuestion,
  faKeyboard,
  faTrash,
  faCreditCard,
  faClose,
} from '@fortawesome/free-solid-svg-icons';

export interface IconButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: FontAweSomeIconType;
  size: FontAwesomeIconProps['size'];
  color: string;
}

type FontAweSomeIconType = keyof typeof FontAwesomeIcons;
export const FontAwesomeIcons = {
  arrowLeft: faAngleLeft,
  remove: faTrash,
  modify: faM,
  help: faCircleQuestion,
  keyboard: faKeyboard,
  creditCard: faCreditCard,
  close: faClose,
};
