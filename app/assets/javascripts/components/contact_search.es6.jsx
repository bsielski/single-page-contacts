class ContactSearch extends React.Component {
  render () {
    return (
      <div>
        <h1>Filter contacts</h1>
        <form onSubmit={this.props.handleSubmit} className="contact_searcgh">
          <input type="search" id="search_input" onChange={this.props.handleChange} value={this.props.phrase}/>
          <input type="submit" value="Search"/>
          <input type="submit" value="Clear filter"/>
        </form>
      </div>
    );
  }
}
