// Async/Await

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

async function example() {
  // await finished then go tp next function!
  await createPosts({ title: 'Post three', body: 'This is post three' });
  getPosts();

}

example(); //<li>Post one</li><li>Post two</li><li>Post three</li>

// with fetch
async function fetchUsers() {
  // fetch return an Promise
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}

fetchUsers();