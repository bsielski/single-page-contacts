class ContactList extends React.Component {
  render () {
    return (
      <div>
        <h1 className="contacts_header">{this.props.prefix} {this.props.number} contacts</h1>
        <ul className="contact_list">
        {this.props.contacts.map((contact) =>
          <ContactItem handleDelete={this.props.handleDelete} key={contact.id} id={contact.id} firstName={contact.first_name} lastName={contact.last_name} email={contact.email} phoneNumber={contact.phone_number} />
        )}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  prefix: React.PropTypes.string,
  number: React.PropTypes.number
};
