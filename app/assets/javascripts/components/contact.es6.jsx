class Contact extends React.Component {
  render () {
    return (
      <li>
        <div>First Name: {this.props.firstName}</div>
        <div>Last Name: {this.props.lastName}</div>
        <div>Email: {this.props.email}</div>
        <div>Phone Number: {this.props.phoneNumber}</div>
      </li>
    );
  }
}

Contact.propTypes = {
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string,
  email: React.PropTypes.string,
  phoneNumber: React.PropTypes.string
};
