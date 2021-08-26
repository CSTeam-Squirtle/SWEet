import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/action';

const mapDispatchToProps = (dispatch) => ({
  addTodo: (newTodo) =>
    dispatch(actions.addTodo(newTodo)),
  loadTodo: () => dispatch(actions.loadTodo),
});
class CreateJobApplicationModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        details: {
          title: '',
          description: '',
          create_at: '',
          checked: false,
        },
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.formFieldChangeHandler = this.formFieldChangeHandler.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      this.props.addTodo(this.state.details);
      this.props.loadTodo();
      this.setState({
        details: {
          title: '',
          description: '',
          create_at: '',
          checked: false,
        },
      });
      this.props.onClose();
    }
  
    formFieldChangeHandler(event) {
      const { details } = this.state;
      details[event.target.name] = event.target.value;
      this.setState({ details });
    }
  
    render() {
      if (!this.props.show) {
        return null;
      }
  
      return (
        <div className="modal list">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Create Task</h4>
            </div>
            <div className="modal-body">
              <form>
                <label>
                  Save: 
                  <select
                    defaultValue={this.state.details.checked}
                    name="checked"
                    onChange={this.formFieldChangeHandler}
                  >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </label>
                <label>
                  Title:
                  <input
                    type="text"
                    name="title"
                    value={this.state.details.title}
                    onChange={this.formFieldChangeHandler}
                  />
                </label>
                <label>
                    Created Date:
                  <input
                    type="date"
                    name="createdDate"
                    value={this.state.details.create_at}
                    onChange={this.formFieldChangeHandler}
                  />
                </label>
                <label>
                  Description:
                  <textarea
                    name="description"
                    value={this.state.details.description}
                    onChange={this.formFieldChangeHandler}
                  />
                </label>
                <button
                  className="btn btn-add"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Add Task
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-close"
                type="button"
                onClick={this.props.onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default connect(null, mapDispatchToProps)(CreateJobApplicationModal);
  