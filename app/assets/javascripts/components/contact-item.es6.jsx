class ContactItem extends React.Component {
  render () {
    return (
      <li className="contact_item">
        <div>First Name: {this.props.firstName}</div>
        <div>Last Name: {this.props.lastName}</div>
        <div>Email: {this.props.email}</div>
        <div>Phone Number: {this.props.phoneNumber}</div>
        <button onClick={this.props.handleDelete} type="button" data-id={this.props.id} className="delete_contact">Delete</button>
      </li>
    );
  }
}

ContactItem.propTypes = {
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string,
  email: React.PropTypes.string,
  phoneNumber: React.PropTypes.string
};
