import Text from '@/components/text'
import Section from '@/components/section'
import styles from './footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.wrapper}>
      <Section Component="div">
        <Text>© 2023 Maycon Santos. All rights reserved.</Text>
      </Section>
    </footer>
  )
}

export default Footer
