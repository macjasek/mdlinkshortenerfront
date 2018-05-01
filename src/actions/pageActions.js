import * as types from './actionTypes';

export function changePage(page) {
    return { type: types.CHANGE_PAGE, page};
  };

export function linksLoaded(links) {
  return { type: types.LINKS_LOADED, links}
};

