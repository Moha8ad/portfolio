import React from "react";

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'Quotify',
          subtitle: 'responsive',
          imageUrl: 'https://illlustrations.co/static/35e1a45f1b256f0a7f6dfac84e1675c0/day100-the-snail.png',
          linkUrl: 'qt/home',
          id: 1
        },
        {
          title: 'Snakes and Ladders',
          subtitle: 'full screen desktop',
          imageUrl: 'https://illlustrations.co/static/a8bffeb0395117a5c2d54c770d50e80e/day2-gaming-console.png',
          linkUrl: 'snakes-and-ladders',
          id: 2
        },
        {
          title: 'app3',
          subtitle: 'coming soon',
          imageUrl: 'https://illlustrations.co/static/d2641810ad0fb936e0c25166b7fa289a/day20-rocket.png',
          linkUrl: '/',
          id: 3
        },
        {
          title: 'app4',
          subtitle: 'coming soon',
          imageUrl: 'https://illlustrations.co/static/34b8b771e91097048a9494b382ec2fc2/118-macbook.png',
          linkUrl: '/',
          size: 'large',
          id: 4
        },
        {
          title: 'app5',
          subtitle: 'coming soon',
          imageUrl: 'https://illlustrations.co/static/74cc668fbe1ef595d4edd1810f7bce32/day76-watch-spectacle.png',
          linkUrl: '/',
          size: 'large',
          id: 5
        }
      ]
    };
  }
  render() {
    const { sections } = this.state;
    return(
      <div className='directory-menu'>
        {sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps}/>
        ))}
      </div>
    );
  }
}

export default Directory;