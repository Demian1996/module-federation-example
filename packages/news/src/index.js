const news = ['新闻1', '新闻2', '新闻3', '新闻4'];

(async () => {
  const { default: React } = await import('libs/react');
  const { default: ReactDOM } = await import('libs/react-dom');
  const { default: useLoadComponent } = await import('libs/useLoadComponent');

  function News() {
    // 复用新闻详情页的Title组件
    const title = useLoadComponent(import('currentNew/Title'));

    return (
      <div>
        <h1>新闻列表</h1>
        {news.map((text) => (title.status === 'success' ? title.value({ value: text }) : title.value))}
      </div>
    );
  }

  ReactDOM.render(<News />, document.getElementById('root'));
})();
