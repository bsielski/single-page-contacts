class Contacts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: this.props.contacts,
      errors: [],
      size: this.props.contacts.length,
      prefix: this.props.prefix,
      inputFirstName: "",
      inputLastName: "",
      inputEmail: "",
      inputPhoneNumber: "",
    }
    this.addContact = this.addContact.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
    this.inputChange = this.inputChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      inputFirstName: "",
      inputLastName: "",
      inputEmail: "",
      inputPhoneNumber: "",
    })
  }

  inputChange(e) {
    const field = e.target
    this.setState({["input" + field.name.charAt(0).toUpperCase() + field.name.slice(1)]: field.value})
  }

  deleteContact (e) {
    Rails.ajax({
      type: "DELETE",
      url: "/contacts/" + e.target.dataset.id,
      success: (contacts) => {
        console.log("SUCCESS at " + new Date())
        this.setState({
                        contacts: contacts,
                        size: contacts.length,
                      })
      },
      error: (errors) => {
        console.log("ERROR at " + new Date())
        console.log("wtf: " + errors + new Date())
      }
    })
    e.preventDefault()
  }

  addContact(e) {
    console.log("Submitted at " + new Date())

    Rails.ajax({
      type: "POST",
      url: "/contacts",
      data: 'contact[first_name]=' + this.state.inputFirstName +
            '&contact[last_name]=' + this.state.inputLastName +
            '&contact[email]=' + this.state.inputEmail +
            '&contact[phone_number]=' + this.state.inputPhoneNumber,
      success: (contacts) => {
        console.log("SUCCESS at " + new Date())
        this.setState({
                        contacts: contacts,
                        inputFirstName: "",
                        inputLastName: "",
                        inputEmail: "",
                        inputPhoneNumber: "",
                        size: contacts.length,
                      })
      },
      error: (response) => {
        console.log("ERROR at " + new Date())
        console.log(response)
        this.setState({
                        errors: response.errors,
                      })
      }
    })
    e.preventDefault()
  }

  render() {
    return(
      <div className="contact_container">
        <div className="contact_section contact_section--input">
          {/*<ContactSearch number={this.state.size} prefix={this.state.prefix} />*/}
          <ContactForm errors={this.state.errors} handleSubmit={this.addContact} handleChange={this.inputChange}
            firstName={this.state.inputFirstName} lastName={this.state.inputLastName}
            email={this.state.inputEmail} phoneNumber={this.state.inputPhoneNumber}/>
        </div>
        <div className="contact_section">
          <ContactList handleDelete={this.deleteContact} contacts={this.state.contacts} number={this.state.size} prefix={this.state.prefix} />
        </div>
      </div>
    )
  }

}

Contacts.propTypes = {
  contacts: React.PropTypes.array,
  size: React.PropTypes.number,
  prefix: React.PropTypes.string

}
