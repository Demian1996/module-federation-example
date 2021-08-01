const newData = {
  title: '我来组成标题',
  content: '我来组成内容',
};

(async () => {
  const { default: React } = await import('libs/react');
  const { default: ReactDOM } = await import('libs/react-dom');
  const { default: useLoadComponent } = await import('libs/useLoadComponent');

  function New() {
    const content = useLoadComponent(import('./components/Content'));
    const title = useLoadComponent(import('./components/Title'));

    return (
      <div>
        <h1>新闻详情</h1>
        {title.status === 'success' ? title.value({ value: newData.title }) : title.value}
        {content.status === 'success' ? content.value({ value: newData.content }) : content.value}
      </div>
    );
  }

  ReactDOM.render(<New />, document.getElementById('root'));
})();
