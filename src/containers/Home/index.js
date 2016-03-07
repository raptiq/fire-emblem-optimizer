import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import Characters from './files/characters.json';

/* components */
import { TopImage } from 'components/TopImage';
import { Character } from 'components/Character';
import { Projects } from 'components/Projects';

const metaData = {
  title: 'Redux Easy Boilerplate',
  description: 'Start you project easy and fast with modern tools',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};



export class Home extends Component { 
  render() {
      console.log(Characters.characters);

    return (
      <section>
        <DocumentMeta {...metaData} />
        <TopImage />
        <Character characters={Characters.characters} />
        <Projects />
      </section>
    );
  }
}