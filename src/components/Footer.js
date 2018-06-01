import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
    <div>
        <span>Show: </span>
        <FilterLink filter={VisibilityFilter.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>
            Active
        </FilterLink>
        <FilterLink>
            Completed
        </FilterLink>
    </div>
)

export default Footer