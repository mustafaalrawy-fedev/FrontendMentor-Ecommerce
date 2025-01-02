import { Fragment } from 'react';
import { navLinks } from './navLinks';

const NavLinks = () => {
  return (
    <Fragment>
      {navLinks.map((link) => {
        const { label, url } = link;
        return (
          <li key={label}>
            <a href={url}>{label}</a>
          </li>
        );
      })}
    </Fragment>
  );
};

export default NavLinks;
