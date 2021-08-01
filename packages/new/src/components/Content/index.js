export default (async () => {
  const { default: React } = await import('libs/react');
  return (props) => {
    return (
      <div>
        <p>{props.value}</p>
      </div>
    );
  };
})();
