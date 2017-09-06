class ContactSearch extends React.Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit} className="contact_searcgh">
        <input type="search" id="search_input" onChange={this.props.handleChange} value={this.props.phrase}/>
        <input type="submit" value="Search"/>
      </form>
    );
  }
}
