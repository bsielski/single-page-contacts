class ContactForm extends React.Component {

  render () {
    const errors = this.props.errors.map((error, index) => <p key={index}>{error}</p>)
    return (
      <div>
        <h1>Add a new contact</h1>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <label>First name</label><br />
            <input name="firstName" type="text" placeholder='First name' value={this.props.firstName} onChange={this.props.handleChange}/>
          </div>

          <div>
            <label>Last name</label><br />
            <input name="lastName" type="text" placeholder='Last name' value={this.props.lastName} onChange={this.props.handleChange}/>
          </div>

          <div>
            <label>Email</label><br />
            <input name="email" type="text" placeholder='Email'value={this.props.email} onChange={this.props.handleChange}/>
          </div>

          <div>
            <label>Phone number</label><br />
            <input name="phoneNumber" type="text" placeholder='Phone number' value={this.props.phoneNumber} onChange={this.props.handleChange}/>
          </div>

          <div>
            <input type="submit" value="Add contact" />
          </div>
        </form>
        {errors}
      </div>
    );
  }
}
