const fetch = require("node-fetch");


// just lists
const posts = [
  {title: 'Post one', body: 'This is post one'},
  {title: 'Post two', body: 'This is post two'}
]

const getPosts = () => {
  // delay 1 sec
  setTimeout(()=>{
    let output = '';
    posts.forEach((post, index)=>{
      output += `<li>${post.title}</li>`;
    });
    console.log(output); // <li>Post one</li><li>Post two</li>
  }, 1000);
}

const createPosts = (post) => {
  /*
   param resolve for resolve
   param reject for error
  */
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      posts.push(post);
      // for error checking
      const error = false;
      if(!error) {
        resolve();
      } else{
        reject('Error: Something went wrong');
      }
    }, 3000);
  });  
}

// run whole prgram
// parameter callback is altered by .then()
createPosts({title: 'Post three', body: 'This is post three'})
  .then(getPosts)
  .catch(err=> console.log(err));

//Promise.all
const p1 = Promise.resolve("hey");
const p2 = 10;
const p3 = new Promise((resolve,reject) => {
  setTimeout(resolve, 2000, "Goobye");
});
const p4 = fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json());

Promise.all([p1, p2, p3, p4]).then(value=>console.log(value));
// output
/* [
  'hey',
  10,
  'Goobye',
  [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: [Object],
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: [Object]
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: [Object],
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: [Object]
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      address: [Object],
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      company: [Object]
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      address: [Object],
      phone: '493-170-9623 x156',
      website: 'kale.biz',
      company: [Object]
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      address: [Object],
      phone: '(254)954-1289',
      website: 'demarco.info',
      company: [Object]
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      address: [Object],
      phone: '1-477-935-8478 x6430',
      website: 'ola.org',
      company: [Object]
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      address: [Object],
      phone: '210.067.6132',
      website: 'elvis.io',
      company: [Object]
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      address: [Object],
      phone: '586.493.6943 x140',
      website: 'jacynthe.com',
      company: [Object]
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      address: [Object],
      phone: '(775)976-6794 x41206',
      website: 'conrad.com',
      company: [Object]
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      address: [Object],
      phone: '024-648-3804',
      website: 'ambrose.net',
      company: [Object]
    }
  ]
]*/