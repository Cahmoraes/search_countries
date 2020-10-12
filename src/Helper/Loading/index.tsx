import React from 'react';

import { Svg, Load } from './styles';

const Loading: React.FC = () => {
  return (
    <Svg>
      <Load cx="54" cy="52" r="50" />
    </Svg>
  );
};

export default Loading;
