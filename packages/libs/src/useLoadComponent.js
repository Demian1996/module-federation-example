/*
 * @Author: Demian
 * @Date: 2021-08-01 20:42:51
 * @Last Modified by: Demian
 * @Last Modified time: 2021-08-01 20:43:49
 * @description：异步加载组件
 */
import React from 'react';
const useLoadComponent = (importPromise) => {
  const [content, setContent] = React.useState({ status: 'loading', value: 'loading...' });
  React.useEffect(() => {
    importPromise
      .then(({ default: loadComponentPromise }) => {
        return loadComponentPromise.then((Component) => {
          setContent({
            status: 'success',
            value: Component,
          });
        });
      })
      .catch((err) => {
        setContent({
          status: 'error',
          value: err,
        });
      });
  }, []);
  return content;
};
export default useLoadComponent;
