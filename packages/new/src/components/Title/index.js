export default (async () => {
  const { default: React } = await import('libs/react');
  return (props) => {
    return <h1>{props.value}</h1>;
  };
})();
