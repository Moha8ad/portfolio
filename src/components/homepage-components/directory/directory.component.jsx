import React from "react";

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'rolodex',
          subtitle: 'live search',
          imageUrl: 'https://illlustrations.co/static/c1f8fe70d30e487be31c2d47ba4ced6d/day73-writing-tool.png',
          linkUrl: 'rolodex',
          id: 1
        },
        {
          title: 'Quotify',
          subtitle: 'Get Inspired!',
          imageUrl: 'http://michaelcriner.com/wp-content/uploads/2013/06/QuotePostLogo.jpg',
          linkUrl: 'quotify',
          id: 2
        },
        {
          title: 'Snakes and Ladders',
          subtitle: 'Game of Chance!',
          imageUrl: 'https://st2.depositphotos.com/2485347/8466/v/950/depositphotos_84668354-stock-illustration-background-of-cartoon-dices.jpg',
          linkUrl: 'snakes-and-ladders',
          id: 3
        },
        {
          title: 'app4',
          subtitle: 'will be constructed',
          imageUrl: 'https://i.pinimg.com/736x/aa/7d/1f/aa7d1fbe563a7d1ebfb438537ea0206a.jpg',
          linkUrl: 'app4',
          size: 'large',
          id: 4
        },
        {
          title: 'app5',
          subtitle: 'to be built',
          imageUrl: 'https://cdn.dribbble.com/users/56427/screenshots/6003020/budio_hero_illustration_for_animation_2_still_2x.gif?compress=1&resize=400x300',
          linkUrl: 'app5',
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