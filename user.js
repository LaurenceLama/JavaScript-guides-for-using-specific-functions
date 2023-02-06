const postListEl = document.querySelector(".post-list");
const id = localStorage.getItem("id");

async function renderPosts(id) {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const postsData = await posts.json();
  //   console.log(postsData);

  // when u want to convert every element of an array into smth like html, we map
  postListEl.innerHTML = postsData.map((post) => postHTML(post)).join("");
  //why join? .join('') lets us convert an array into a string, which innerHTML can read and set. innderHTML cannot setup arrays
  function postHTML(post) {
    return `<div class="post">
        <div class="post__title">
        ${post.title}
        </div>
        <p class="post__body">
        ${post.body}
        </p>
        </div>`;
  }
}

async function onSearchChange(event) {
  const id = event.target.value;
  renderPosts(id);
}

renderPosts(id);

// SOOOO, from my understanding, for starters, we choose from the users right, after picking one, their specific post shows up. those posts are gathered using the id[line 2] from local storage(the database I think), THEN, to see their posts, it needs to be rendered

// to get it rendered, we use that 'renderPosts(id)' wherein it async awaits the promise, fetching it, and unlocking its content. THEN, with the unlocked contents(to be seen on console if you shall console.logged), it shall be converted to a readable HTML through using .map(converts js content -> HTML content)

// THEEEEN, with that render command function, we used a separate function for the HTML layout so it looks clean(not too many lines unlike below). As for its use, well it basically depicts a javascript content on an HTML format so it looks - say it.. clean

// its basically complete, HOWEVER we also need to make it accessible to search id's. SO, with function 'onSearchChange(event)', it generates an event(duh, but yeh it does, putting any other names would not work) that makes it accessible for id's to cycle through and be rendered just by clicking that search or that up/down arrow

// IN CONCLUSION, we call an id by clicking any, then that specific id calls the local storage, get it rendered, put it on HTML format, and shows on the page! with search by Id feature, all id's can be cycled through by generating an event to render id's at their called value 

// making it shorter will make it DYNAMIC, all of these js should be; dynamic = one line, argument, or a simple text targets multiple lines of code(?) or data 

// If you got lost, get lost again cuz it is confusion, I trust in my analysis-logic mode

// async function main() {
//   const posts = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?userId=${id}`
//   );
//   const postsData = await posts.json();
//   console.log(postsData);

//   // when u want to convert every element of an array into smth like html, we map
//   postListEl.innerHTML = postsData
//     .map(
//       (post) => `<div class="post">
//         <div class="post__title">
//             ${post.title}
//         </div>
//         <p class="post__body">
//             ${post.body}
//         </p>
//         </div>`
//     )
//     .join("");
// }

// main();

// async function onSearchChange(event) {
//   const id = event.target.value;
//   const posts = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?userId=${id}`
//   );
//   const postsData = await posts.json();
//   console.log(postsData);

//   // when u want to convert every element of an array into smth like html, we map
//   postListEl.innerHTML = postsData
//     .map(
//       (post) => `<div class="post">
//         <div class="post__title">
//             ${post.title}
//         </div>
//         <p class="post__body">
//             ${post.body}
//         </p>
//         </div>`
//     )
//     .join("");
// }
