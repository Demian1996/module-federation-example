const newData = {
  title: '我来组成标题',
  content: '我来组成内容',
};

(async () => {
  const { default: React } = await import('libs/react');
  const { default: ReactDOM } = await import('libs/react-dom');
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

  function New() {
    const content = useLoadComponent(import('./components/Content'));
    const title = useLoadComponent(import('./components/Title'));

    return (
      <div>
        <h1>Today's New</h1>
        {title.status === 'success' ? title.value({ value: newData.title }) : title.value}
        {content.status === 'success' ? content.value({ value: newData.content }) : content.value}
      </div>
    );
  }

  ReactDOM.render(<New />, document.getElementById('root'));
})();
