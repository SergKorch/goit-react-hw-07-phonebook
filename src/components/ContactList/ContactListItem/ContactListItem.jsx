import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';
import { toggleCompleted, deleteContact } from 'redux/contacts/contacts-operations';

const ContactListItem = ({ id, nameContact, number, deleteContact }) => {
  return (
    <li>
      <p>
        {nameContact}: {number}
      </p>
      <button
        className={s.deleteButton}
        type="button"
        id={id}
        onClick={e => {
          deleteContact(e.target.id);
        }}
      >
        delete
      </button>
    </li>
  );
};
const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(deleteContact(id)),
});
// ContactListItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   nameContact: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

export default ContactListItem;
