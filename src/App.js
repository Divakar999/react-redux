import React from 'react';
import { connect } from 'react-redux';

function App({ articlesFromStore, searchTermFromStore, onSearch }) {
  console.log(searchTermFromStore);
  return (
    <div style={{ margin: '30px' }}>
      <h3>List of Article </h3>
      <div>
        <label>Search Article</label> <br />
        <input type="text" onChange={(e) => onSearch(e.target.value)}></input>
        <br />
      </div>
      {articlesFromStore.map((article) => (
        <li key={article.id}>
          <a href={article.url}>{article.title}</a>
        </li>
      ))}
    </div>
  );
}
const mapStateToPropsFromStore = (state) => ({
  articlesFromStore: state.articleState.articles,
  searchTermFromStore: state.searchState.searchTerm,
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (value) => dispatch({ type: 'SEARCH_TERM', payload: value }),
});

export default connect(mapStateToPropsFromStore, mapDispatchToProps)(App);
