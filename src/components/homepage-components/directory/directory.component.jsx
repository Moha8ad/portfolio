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
          title: 'Quo',
          subtitle: 'Get Inspired!',
          imageUrl: 'https://illlustrations.co/static/e6b84e6be05378ec8aa056315aba888d/day71-designer-tool-essential.png',
          linkUrl: 'quotes',
          id: 2
        },
        {
          title: 'Quotify',
          subtitle: 'Quote Library',
          imageUrl: 'https://illlustrations.co/static/76e32463a2c518d3bbd3c1fb970e5c1b/day74-stationary-set.png',
          linkUrl: 'quotify',
          id: 3
        },
        {
          title: 'app4',
          subtitle: 'will be constructed',
          imageUrl: 'https://illlustrations.co/static/c91b38b0696ee92de685b539144ecdad/day72-designer-tool-war.png',
          linkUrl: 'app4',
          size: 'large',
          id: 4
        },
        {
          title: 'app5',
          subtitle: 'to be built',
          imageUrl: 'https://illlustrations.co/static/e7437dc17b93ae7c667b8c640fa446f5/day75-stationary-set-2.png',
          linkUrl: 'app4',
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