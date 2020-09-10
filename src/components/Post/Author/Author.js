// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}
        <a
          className={styles['author__bio-linkedin']}
          href={getContactHref('linkedin', author.contacts.linkedin)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on LinkedIn
        </a>
      </p>
      <form
        action="https://tinyletter.com/abeyep" method="post"
        target="popupwindow"
        onsubmit="window.open('https://tinyletter.com/abeyep', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
        <p>
          <label for="tlemail">Enter your email address</label>
        </p>
        <p>
          <input type="text" name="email" id="tlemail" />
        </p>
        <input type="hidden" value="1" name="embed" />
        <input type="submit" value="Subscribe" />
      </form>
    </div>

  );
};

export default Author;
