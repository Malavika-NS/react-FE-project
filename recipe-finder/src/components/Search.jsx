import { useState } from 'react';
import { string, func } from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

const Search = ({ setSearchedQuery, defaultSearchTerm }) => {
  const [value, setValue] = useState('');

  const onFormSubmit = () => {
    setSearchedQuery(value);
  };

  return (
    <div className="search-section">
      <Form onSubmit={onFormSubmit}>
        <h2>Search for recipes with ingredients</h2>
        <Input
          placeholder={defaultSearchTerm}
          action={{ icon: 'search', color: 'blue' }}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <h4 className="example-text">
          For example try one of the following: carrot, broccoli, asparagus,
          cauliflower, corn
        </h4>
      </Form>
    </div>
  );
};

Search.propTypes = {
  setSearchedQuery: func,
  defaultSearchTerm: string,
};

export default Search;
