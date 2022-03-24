import React, {useState} from "react";

import MenuItem from '../menu-item/menu-item.component';

import {DirectoryMenu } from './directory.styles.jsx';

const Directory = () => {

  const [sections] = useState(
    [
      {
        title: 'Quotify',
        subtitle: 'get inspired',
        imageUrl: 'https://illlustrations.co/static/8b97cfa476d1a9b8f88f4b52ea941886/day21-Lantern.png',
        linkUrl: 'qt/home',
        id: 1,
      },
      {
        title: 'Snakes and Ladders',
        subtitle: 'game of chance',
        imageUrl: 'https://illlustrations.co/static/a8bffeb0395117a5c2d54c770d50e80e/day2-gaming-console.png',
        linkUrl: 'snakes-and-ladders',
        id: 2
      },
      {
        title: 'G5 Box',
        subtitle: 'words to go',
        imageUrl: 'https://illlustrations.co/static/35e1a45f1b256f0a7f6dfac84e1675c0/day100-the-snail.png',
        linkUrl: 'g5/home',
        id: 1,
      },
      {
        title: 'Timed',
        subtitle: "more than a calendar",
        imageUrl: 'https://illlustrations.co/static/13fefd389e126b12f50282fc1f93b6df/day19-apple-watch.png',
        linkUrl: 'timed/home',
        id: 1,
      },
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
