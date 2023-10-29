import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setVisibilityFilter } from '../store/actions';

function TodoStatusFilter() {
  const visibilityFilter = useSelector((state) => state.visibilityFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(setVisibilityFilter(filter));
  };

  return (
    <div className='filter-container'>
      <button
        onClick={() => handleFilterChange('SHOW_ALL')}
        className={`filter-button ${visibilityFilter === 'SHOW_ALL' ? 'active' : ''}`}
      >
        All
      </button>
      <button
        onClick={() => handleFilterChange('SHOW_ACTIVE')}
        className={`filter-button ${visibilityFilter === 'SHOW_ACTIVE' ? 'active' : ''}`}
      >
        Active
      </button>
      <button
        onClick={() => handleFilterChange('SHOW_COMPLETED')}
        className={`filter-button ${visibilityFilter === 'SHOW_COMPLETED' ? 'active' : ''}`}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoStatusFilter;
