export default (async () => {
  const { default: React } = await import('libs/react');
  return (props) => {
    return <h3>{props.value}</h3>;
  };
})();
