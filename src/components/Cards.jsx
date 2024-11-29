import PropTypes from 'prop-types';

const SkillTag = ({ skill }) => {
  return (
    <li className="tag">{skill}</li>
  )
}

SkillTag.propTypes = {
  skill: PropTypes.string.isRequired
}

const DeliverableLi = ({ deliverable }) => {
  return (
    <li>{deliverable}</li>
  )
}

DeliverableLi.propTypes = {
  deliverable: PropTypes.string.isRequired
}

export {
  SkillTag,
  DeliverableLi
}