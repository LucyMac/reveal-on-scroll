export const getEntityId = ownProps => Number(ownProps.match.params.item);

export const isEditRoute = (ownProps) => {
  if (getEntityId(ownProps) && ownProps.match.params.option === 'edit') {
    return true
  } else { return false }
}

export const isViewRoute = (ownProps) => {
  // if there's an id but no 'edit' option in path
  if (Number(ownProps.match.params.item) && !ownProps.match.params.option) {
    return true
  } else { return false }
}

export const getEditRoute = ownProps => {
  return !isEditRoute(ownProps) && `${ownProps.match.url}/edit`;
}

export const getViewRoute = ownProps => {
  // if on edit route, remove 'edit' from url
  const lastIndex = ownProps.match.url.lastIndexOf("/");
  return isEditRoute(ownProps) && ownProps.match.url.substring(0, lastIndex);
}
