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

const blogContainer = document.querySelector('#blogContainer');

for (let i = 0; i < blogPosts.length; i++) {
  const blogPost = blogPosts[i];

  const postEl = document.createElement('section');
  postEl.classList.add('blogpost');

  const titleEl = document.createElement('h2');
  titleEl.textContent = blogPost.blogTitle;

const contentEl = document.createElement('p');
contentEl.textContent = blogPost.blogContent;


const authorEl = document.createElement('h3');
authorEl.textContent = `Author: ${blogPost.username}`;

postEl.appendChild(titleEl);
postEl.appendChild(contentEl);
postEl.appendChild(authorEl);

blogContainer.appendChild(postEl);
}