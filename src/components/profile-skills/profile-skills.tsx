import Text from '@/components/text'
import Image from 'next/image'
import profileSkillsIcon from '@/assets/skills-icon.svg'
import styles from './profile-skills.module.css'

const ProfileSkills: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Text weight="medium">Principais skills</Text>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Image src={profileSkillsIcon} className={styles.icon} alt="" />
          <Text size="small">Next.js, React</Text>
        </li>
        <li className={styles.item}>
          <Image src={profileSkillsIcon} className={styles.icon} alt="" />
          <Text size="small">React Native, Typescript</Text>
        </li>
        <li className={styles.item}>
          <Image src={profileSkillsIcon} className={styles.icon} alt="" />
          <Text size="small">Node.js, SCSS</Text>
        </li>
        <li className={styles.item}>
          <Image src={profileSkillsIcon} className={styles.icon} alt="" />
          <Text size="small">GIT</Text>
        </li>
      </ul>
    </div>
  )
}

export default ProfileSkills
