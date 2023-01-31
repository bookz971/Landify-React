import { h } from 'preact'

import PropTypes from 'prop-types'

import projectStyles from '../global-style.module.css'
import styles from './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div class={styles['container']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        class={styles['image']}
      />
      <h5 class={` ${styles['text']} ${projectStyles['headline5']} `}>
        {props.card_title}
      </h5>
      <span class={styles['text1']}>{props.text}</span>
    </div>
  )
}

FeatureCard.defaultProps = {
  card_title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
  image_src: '/playground_assets/01.svg',
  image_alt: 'image',
}

FeatureCard.propTypes = {
  card_title: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard
