import { h } from 'preact'

import PropTypes from 'prop-types'

import projectStyles from '../global-style.module.css'
import styles from './primary-button.css'

const PrimaryButton = (props) => {
  return (
    <div class={styles['container']}>
      <button
        class={` ${styles['button']} ${projectStyles['medium-label']} ${projectStyles['button']} `}
      >
        {props.button}
      </button>
    </div>
  )
}

PrimaryButton.defaultProps = {
  button: 'Button',
}

PrimaryButton.propTypes = {
  button: PropTypes.string,
}

export default PrimaryButton
