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
          subtitle: 'get inspired',
          imageUrl: 'https://illlustrations.co/static/35e1a45f1b256f0a7f6dfac84e1675c0/day100-the-snail.png',
          linkUrl: 'qt/home',
          id: 1
        },
        {
          title: 'Snakes and Ladders',
          subtitle: 'game of chance',
          imageUrl: 'https://illlustrations.co/static/a8bffeb0395117a5c2d54c770d50e80e/day2-gaming-console.png',
          linkUrl: 'snakes-and-ladders',
          id: 2
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