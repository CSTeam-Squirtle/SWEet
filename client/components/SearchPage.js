import React from 'react'; // Unnecessary as of React 17: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
// import { connect } from 'react-redux';
import NavBar from './NavBar';
import SearchBar from './SearchBar';


const SearchPage = () => {

  // Dummy data for testing:
  const posts = [
    { id: '1', name: 'Atif Luna  |  atif404@gmail.com' },
    { id: '2', name: 'Mackenzie Stein  |  makkiezee@gmail.com' },
    { id: '3', name: 'Evan Woodard  |  salmonsailor999@yahoo.com' },
    { id: '4', name: 'Naomi Nicholson   |  booklover89@aol.com' },
    { id: '5', name: 'To-Do Task: Do one hour of algos   |  Status: Complete for today' },
    { id: '6', name: 'To-Do Task: Plan study sesh   |  Status: Not complete for today' },
  ];

  /* Request to query all databases for data
  fetch('/actualRouteGoesHere')
    .then(res => res.json() )
    .then( data => {
      results = data;
    })
    .catch((err) => console.log('Error in SearchPage.js fetching data'));
  */

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
  const query = new URLSearchParams(search).get('searchbar');
  // Using our search query and filter function, we can render the posts that match our search:
  const filteredPosts = filterPosts(posts, query);

    return(
      <>
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