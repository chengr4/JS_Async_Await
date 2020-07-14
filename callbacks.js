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

const createPosts = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    // The function will be called after posts.push(post);
    // So here is getPosts called afterwards!!
    // So the program will wait for 3 sec than wait for 1 sec
    callback();
  }, 3000);
}

// run whole prgram
createPosts({title: 'Post three', body: 'This is post three'}, getPosts);