function Tab(props) {
  if (props.isSelected) {
    return <div>{props.children}</div>;
  } else {
    return null;
  }
}
export default Tab;
