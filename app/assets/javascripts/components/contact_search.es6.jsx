class ContactsHeader extends React.Component {
  render () {
    return (
      <h1 className="contacts_header">{this.props.prefix} {this.props.number} contacts</h1>
    );
  }
}

ContactsHeader.propTypes = {
  prefix: React.PropTypes.string,
  number: React.PropTypes.number
};
