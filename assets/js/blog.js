const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

let mode = 'light';

themeSwitcher.addEventListener('click', function () {
  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
  else {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
});



const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
const latestPost = blogPosts[blogPosts.length - 1];

const blogPostsContainer = document.querySelector('#blogPostsContainer');

blogPostsContainer.innerHTML = '';

const postElement = document.createElement('section');
postElement.classList.add('blog-post');

const titleElement = document.createElement('h2');
titleElement.textContent = latestPost.blogTitle;

const contentElement = document.createElement('p');
contentElement.textContent = latestPost.blogContent;


const authorElement = document.createElement('h3');
authorElement.textContent = `Author: ${latestPost.username}`;

postElement.appendChild(titleElement);
postElement.appendChild(contentElement);
postElement.appendChild(authorElement);

blogPostsContainer.appendChild(postElement);


