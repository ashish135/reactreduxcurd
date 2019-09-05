import React from 'react';
import {connect} from 'react-redux';
import {addContact} from '../actions/contactActions';

class Contact extends React.Component{
    state = {
        fname: '',
        lname: '',
        email: '',
        address: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state);       
    }
    render() {
        const { contactlist } = this.props;
        const contacts = contactlist.length ? (contactlist.map(contact => {
            return(
                <tr key={contact.id}>
                    <td>{contact.fname}</td>
                    <td>{contact.email}</td>
                    <td>{contact.address}</td>
                </tr>
            )
        })) : (
            <tr>
                <td>No contact found!</td>
            </tr>
        );
    return(

        <div className="main-container container">
            <h2 className="blue-text">Contact</h2>
            <div className="row">
                <form className="col s12" action="" method="GET" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="input-field col s6">
                    <input id="fname" onChange={this.handleChange} type="text" className="validate" />
                    <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                    <input id="lname" onChange={this.handleChange} type="text" className="validate" />
                    <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="email" onChange={this.handleChange} type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <textarea onChange={this.handleChange} id="address" className="materialize-textarea"></textarea>
                    <label htmlFor="textarea1">Address</label>
                    </div>
                </div>
                <div className="row">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    </button>
                </div>

                </form>
            </div>
            <h3 className="blue-text">Records</h3>       
                <table>
                 <thead>
                    <tr><th>Name</th><th>Email</th><th>Address</th></tr>    
                 </thead>   
                 <tbody>
                   {contacts}
                 </tbody>       
                </table>     
        </div>
    )
    }
}

const mapStoreToProps = (state) => {
   return {
       contactlist: state.contacts
   }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addContact: (data) => {
            dispatch(addContact(data))
        }
    }
}
export default connect(mapStoreToProps,mapDispatchToProps)(Contact);