import React from 'react';

export default currentPath => {
  const [history, updateHistory] = React.useState([]);

  console.log('currentPath = ', currentPath);

  React.useEffect(() => {
    updateHistory([
      {
        ...currentPath,
      },
      ...history,
    ]);
  }, [currentPath]);

  return history;
};
