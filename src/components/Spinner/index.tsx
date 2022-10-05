import { FC } from 'react';
import SVGIcon from '../SVGIcon';
import { otherIcons } from '../../enums/svgIcons';
import styles from './index.module.css';

export const Spinner: FC = () => (
  <div className={styles.spinner}>
    <SVGIcon name={otherIcons.Spinner} />
  </div>
);
