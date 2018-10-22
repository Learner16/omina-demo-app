import React from 'react';
import './footer.scss';

const footerLinks = [
  {
    name: 'Privacy Policy',
    url: '#',
  },
  {
    name: 'Copyright',
    url: '#',
  },
  {
    name: 'Terms & Conditions',
    url: '#',
  },
  {
    name: 'Contact Us',
    url: '#',
  },
];

const Footer = () => (
  <div className="footer">
    <span> &copy; 2018 News. All rights reserved.</span>
    <ul>
      {footerLinks.map(link => (
        <li key={link.name}>
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
