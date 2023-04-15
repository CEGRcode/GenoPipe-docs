/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  /*
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  */

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'category',
      label: 'General',
      items: ['welcome', 'quick-start'],
    },
    {
      type: 'category',
      label: 'EpitopeID',
      items: ['EpitopeID/epitopeid'],
    },
    {
      type: 'category',
      label: 'DeletionID',
      items: ['DeletionID/deletionid'],
    },
    {
      type: 'category',
      label: 'StrainID',
      items: ['StrainID/strainid'],
    },
  ],
};

module.exports = sidebars;
