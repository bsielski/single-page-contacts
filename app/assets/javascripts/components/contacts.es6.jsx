class Contacts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: this.props.contacts,
      size: this.props.size,
      prefix: this.props.prefix
    }
  }

  render() {
    return(
      <div>
        <ContactsHeader number={this.state.size} prefix={this.state.prefix} />
        <ul className="contacts">
        {this.state.contacts.map((contact) =>
          <Contact key={contact.id} firstName={contact.first_name} lastName={contact.last_name} email={contact.email} phoneNumber={contact.phone_number} />
        )}
        </ul>
      </div>
    )
  }

}

Contacts.propTypes = {
  contacts: React.PropTypes.array
}
