const db = [
  {
    name: 'admin',
    age: 25,
    posts: [
      {
        text: 'bottom-line',
        description: 'incremental',
        value: 'circuit',
        time: new Date(
          'Mon May 03 2021 12:06:09 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'transmitter',
        description: 'panel',
        value: 'Zimbabwe',
        time: new Date(
          'Thu May 06 2021 18:53:27 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'up',
        description: 'cross-platform',
        value: 'Compatible',
        time: new Date(
          'Sun Mar 28 2021 11:30:28 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'Account',
        description: 'Assurance',
        value: 'array',
        time: new Date(
          'Fri Nov 13 2020 19:08:38 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'Car',
        description: 'Handmade',
        value: 'overriding',
        time: new Date(
          'Sun Jan 10 2021 18:40:35 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'Account',
        description: 'cross-platform',
        value: 'digital',
        time: new Date(
          'Wed Feb 17 2021 04:54:51 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'compress',
        description: 'Berkshire',
        value: 'Dirham',
        time: new Date(
          'Wed Mar 03 2021 09:27:36 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
    ].map((el, idx) => {
      return {
        ...el,
        id: idx,
      };
    }),
  },
  {
    name: 'other',
    age: 28,
    posts: [
      {
        text: 'Senior',
        description: 'Cambridgeshire',
        value: 'Concrete HDD',
        time: new Date(
          'Sun May 09 2021 06:59:08 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'Cotton integrated harness',
        description: 'quantify',
        value: 'Savings',
        time: new Date(
          'Thu May 13 2021 04:38:27 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'Idaho',
        description: 'Awesome Rustic',
        value: 'protocol Web Dakota',
        time: new Date(
          'Tue Apr 27 2021 07:44:59 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'open-source ADP',
        description: 'Soft',
        value: 'Team-oriented',
        time: new Date(
          'Sun Aug 08 2021 04:07:26 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'Communications',
        description: 'Incredible Balanced',
        value: 'cross-media',
        time: new Date(
          'Mon May 10 2021 12:12:46 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'Progressive red National',
        description: 'EXE',
        value: 'Representative Marketing RSS',
        time: new Date(
          'Sat Dec 26 2020 20:21:57 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'Data',
        description: 'capacitor Distributed',
        value: 'SDR',
        time: new Date(
          'Fri Oct 15 2021 11:30:46 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'deposit Buckinghamshire',
        description: 'AI override',
        value: 'niches invoice Chair',
        time: new Date(
          'Sun May 23 2021 03:39:31 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'Riel',
        description: 'Route Cross-platform',
        value: 'real-time Investment Marketing',
        time: new Date(
          'Wed May 26 2021 08:54:14 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'New Dinar extensible',
        description: 'override Granite',
        value: 'Soap Rufiyaa Intelligent',
        time: new Date(
          'Tue Dec 01 2020 12:06:41 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'Metal',
        description: 'Incredible infomediaries',
        value: 'solid',
        time: new Date(
          'Tue Dec 22 2020 13:44:24 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'indexing',
        description: 'JBOD',
        value: 'Avon',
        time: new Date(
          'Thu Nov 19 2020 08:25:13 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'Taiwan Checking Pizza',
        description: 'Supervisor',
        value: 'Nakfa override Utah',
        time: new Date(
          'Sun Jul 04 2021 02:23:35 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'transmitter eyeballs',
        description: 'Underpass Practical',
        value: 'synergistic',
        time: new Date(
          'Tue Jan 12 2021 08:07:23 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'Concrete',
        description: 'neural',
        value: 'quantifying',
        time: new Date(
          'Thu Jan 28 2021 21:37:54 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'utilize Wooden',
        description: 'generation hacking Sleek',
        value: 'Rhode Legacy Technician',
        time: new Date(
          'Wed Aug 25 2021 03:14:40 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
      {
        text: 'invoice Account West',
        description: 'Isle withdrawal payment',
        value: 'Borders TCP',
        time: new Date(
          'Tue Apr 13 2021 03:42:56 GMT+0500 (Екатеринбург, стандартное время)'
        ).getTime(),
      },
    ].map((el, idx) => {
      return {
        ...el,
        id: idx,
      };
    }),
  },
];

function getUsers() {
  return db.map((el) => {
    return { name: el.name };
  });
}

function getUser(name) {
  return db
    .filter((el) => {
      return el.name == name;
    })
    .map((user) => {
      return {
        name: user.name,
        age: user.age,
      };
    })[0];
}

function getPosts(name) {
  return db.filter((user) => {
    return user.name == name;
  })[0].posts;
}

function getPost(user_name, post_id) {
  return db
    .filter(({ name }) => {
      return name == user_name;
    })[0]
    .posts.filter(({ id }) => {
      return id == post_id;
    })[0];
}

export { getPost, getPosts, getUser, getUsers };
