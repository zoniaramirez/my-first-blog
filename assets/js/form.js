const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#blogTitle');
const contentInput = document.querySelector('#blogContent');
const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  if (usernameInput.value.trim() === '' || titleInput.value.trim() === '' || contentInput.value.trim() === '') {
    alert('Please complete all fields before submitting the form.');
    return;
  }

  const blogPosts =JSON.parse(localStorage.getItem('blogPosts')) || [];

    const blogPost = {
      username: usernameInput.value.trim(),
      blogTitle: titleInput.value.trim(),
      blogContent: contentInput.value.trim(),
    };

    blogPosts.push(blogPost);

  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

  window.location.href = './blog.html';
});

