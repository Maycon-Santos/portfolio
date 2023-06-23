import classNames from 'classnames'
import styles from './divider.module.css'

type Spacing = 'small' | 'medium' | 'large'

type DividerProps = {
    spacingTop?: Spacing
    spacingBottom?: Spacing
}

const Divider: React.FC<DividerProps> = props => {
    const { spacingTop = 'medium', spacingBottom = 'medium' } = props

    return (
        <hr
            className={classNames(
                styles.hr,
                styles[`spacing-top-${spacingTop}`],
                styles[`spacing-bottom-${spacingBottom}`]
            )}
        />
    )
}

export default Divider
