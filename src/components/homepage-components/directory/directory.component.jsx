import React, {useState} from "react";

import MenuItem from '../menu-item/menu-item.component';

import {DirectoryMenu } from './directory.styles.jsx';

const Directory = () => {

  const [sections] = useState(
    [
      {
        title: 'Quotify',
        subtitle: 'get inspired',
        imageUrl: 'https://illlustrations.co/static/35e1a45f1b256f0a7f6dfac84e1675c0/day100-the-snail.png',
        linkUrl: 'qt/home',
        id: 1,
        status: true
      },
      {
        title: 'Snakes and Ladders',
        subtitle: 'game of chance',
        imageUrl: 'https://illlustrations.co/static/a8bffeb0395117a5c2d54c770d50e80e/day2-gaming-console.png',
        linkUrl: 'snakes-and-ladders',
        id: 2
      }
    ]
  )

  return(
    <DirectoryMenu>
      {sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps}/>
      ))}
    </DirectoryMenu>
  )
}

export default Directory;
