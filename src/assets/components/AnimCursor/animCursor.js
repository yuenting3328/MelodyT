import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

const AnimCursor = () => {
    return (
        <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color='117, 250, 200'
        outerAlpha={0.4}
        innerScale={0.5}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 12,
              color: '117, 250, 200',
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5
            }
          }
        ]}
      />
    )
};

export default AnimCursor