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
      inputSearch: "",
    }
    this.addContact = this.addContact.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.searchChange = this.searchChange.bind(this)
    this.searchClear = this.searchClear.bind(this)
  }

  componentDidMount() {
    this.setState({
      inputFirstName: "",
      inputLastName: "",
      inputEmail: "",
      inputPhoneNumber: "",
      inputSearch: "",
    })
  }

  getContacts(phrase) {
    let data = ''
    if (phrase) {
      data = 'search=' + phrase
    }
    console.log("DATA: " + data)
    Rails.ajax({
      type: "GET",
      url: "/contacts.json/",
      data: data,
      success: (response) => {
        console.log("SUCCESS at " + new Date())
        console.log(response.contacts)
        this.setState({
                        contacts: response.contacts,
                        prefix: response.prefix,
                        size: response.contacts.length,
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
  }

  searchChange(e) {
    const field = e.target
    console.log("FIELD VALUE: " + field.value + " " + new Date())
    this.setState({inputSearch: field.value}, () => {
      console.log("STATE INPUT SEARCH: " + this.state.inputSearch + " " + new Date())
      this.getContacts(this.state.inputSearch)
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
        this.getContacts(this.state.inputSearch)
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
                        errors: [],

                      })
      },
      error: (response) => {
        console.log("ERROR at " + new Date())
        console.log(response.errors)
        this.setState({
                        errors: response.errors,
                      })
      }
    })
    e.preventDefault()
  }

  searchClear(e) {
    this.setState({inputSearch: ""}, () => {
      console.log("CLEARED SEARCH: " + this.state.inputSearch + " " + new Date())
      this.getContacts(this.state.inputSearch)
    })
    e.preventDefault()
  }


  render() {
    return(
      <div className="contact_container">
        <div className="contact_section contact_section--input">
          <ContactSearch handleSubmit={this.searchClear} handleChange={this.searchChange} phrase={this.state.inputSearch}/>
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
