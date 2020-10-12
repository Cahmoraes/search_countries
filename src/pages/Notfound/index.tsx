import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as NotFoundImg } from '../../assets/img/404.svg';
import { ReactComponent as Arrow } from '../../assets/img/arrow_left.svg';

import { NotFoundWrapper, Back, Oops, Paragraph } from './styles';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundImg />
      <Oops>Oops!</Oops>
      <Paragraph>
        We did not find the page you are looking for. Would you like to go back
        Home?
      </Paragraph>
      <Back>
        <Link to="/">
          <Arrow /> <span>Back</span>
        </Link>
      </Back>
    </NotFoundWrapper>
  );
};

export default NotFound;
