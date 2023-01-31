import { h } from 'preact'

import PropTypes from 'prop-types'

import projectStyles from '../global-style.module.css'
import styles from './secondary-button.css'

const SecondaryButton = (props) => {
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

SecondaryButton.defaultProps = {
  button: 'Button',
}

SecondaryButton.propTypes = {
  button: PropTypes.string,
}

export default SecondaryButton
