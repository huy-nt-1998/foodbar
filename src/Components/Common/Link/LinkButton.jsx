function LinkButton(props) {
  const {content, url} = props
    return <a href={url || "#"} className="link-button">{content||null}</a>
}
export default LinkButton