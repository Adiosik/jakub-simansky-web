export type Translation = {
  head: {
    tagline: string;
    location: string;
  };
  eyebrow: string;
  lede: string;
  player: {
    play: string;
    stop: string;
    nowPlaying: string;
    playLabel: string;
    prevAlbum: string;
    nextAlbum: string;
  };
  nav: {
    concerts: string;
    records: string;
    contact: string;
    about: string;
  };
  print: {
    caption: string;
    alt: string;
  };
  footer: {
    copy: string;
    copied: string;
    copyAria: string;
  };
  panels: {
    close: string;
    concerts: {
      title: string;
      intro: string;
      soldOut: string;
      empty: string;
    };
    records: {
      title: string;
      intro: string;
      play: string;
      playing: string;
    };
    contact: {
      title: string;
      intro: string;
      bookingLabel: string;
      emailLabel: string;
      followLabel: string;
    };
    about: {
      title: string;
      intro: string;
      body: string;
    };
  };
};
