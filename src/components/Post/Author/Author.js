// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  function submitForm() {
    window.open('https://tinyletter.com/abeyep', 'popupwindow', 'scrollbars=yes,width=800,height=600');
    return true;
  }

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
        className={styles['author__form']}
        action="https://tinyletter.com/abeyep" method="post"
        target="popupwindow"
        onSubmit={submitForm}>
        <p className={styles['author__form-header']}>Let's stay in touch!</p>
        <p className={styles['author__form-description']}>
          Subscribe to my newsletter for updates.
        </p>
        <p>
          <label className={styles['author__form-label']} htmlFor="tlemail">Email Address</label>
          <input className={styles['author__form-input']} type="email" name="email" id="tlemail"/>
        </p>
        <input type="hidden" value="1" name="embed" />
        <input className={styles['author__form-button']} type="submit" value="Subscribe" />
      </form>
    </div>
  );
};

export default Author;
