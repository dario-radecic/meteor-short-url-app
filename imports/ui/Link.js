import React from 'react';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from "./LinksListFilters";


export default () => (
  <div>
    <PrivateHeader title="Your Links" />
    <LinksListFilters />
    <AddLink />
    <LinksList />
  </div>
);
