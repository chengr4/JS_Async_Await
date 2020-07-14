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
    // the function will be called after posts.push(post);
    callback();
  }, 3000);
}

createPosts({title: 'Post three', body: 'This is post three'}, getPosts);