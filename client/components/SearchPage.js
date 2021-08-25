import React from 'react'; // Unnecessary as of React 17: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
// import { connect } from 'react-redux';
import NavBar from './NavBar';
import SearchBar from './SearchBar';


const SearchPage = () => {

  // Dummy data for testing:
  const posts = [
    { id: '1', name: 'This first post is about React' },
    { id: '2', name: 'This next post is about Preact' },
    { id: '3', name: 'We have yet another React post!' },
    { id: '4', name: 'This is the fourth and final post' },
  ];

  // We’ll also need a function that filters out posts depending on the search query:
  const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }
  
    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
  };

  // Our search bar will navigate us to a new URL when we perform a search.
  // We can grab this value from the URL:
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  // Using our search query and filter function, we can render the posts that match our search:
  const filteredPosts = filterPosts(posts, query);

    return(
      <>
        <NavBar/>
        <div>

          <SearchBar />

          <ul>
            {filteredPosts.map((post) => (
              <li key={post.id}>{post.name}</li>
            ))}
          </ul>

        </div>
      </>
    )
}

export default SearchPage;