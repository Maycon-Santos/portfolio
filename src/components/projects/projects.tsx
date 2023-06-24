import Image from 'next/image'
import Link from 'next/link'
import Text from '@/components/text'
import Divider from '@/components/divider'
import { breakpointMatches, useBreakpoints } from '@/components/breakpoints'
import { projects } from '@/data/projects'
import styles from './projects.module.css'
import classNames from 'classnames'

const Projects: React.FC = () => {
  const breakpoints = useBreakpoints()
  const breakpointMediumClassName = breakpoints.medium
    ? 'breakpoint-medium'
    : ''

  return (
    <div className={styles.wrapper}>
      <div className={styles['project-list']}>
        {projects.map(({ name, description, image, links }, index) => (
          <>
            {index > 0 && <Divider spacingTop="large" spacingBottom="large" />}
            <div
              className={classNames(
                styles['project-item'],
                styles[breakpointMediumClassName],
              )}
              key={name}
            >
              <Image
                src={image}
                alt=""
                className={classNames(
                  styles['demo-image'],
                  styles[breakpointMediumClassName],
                )}
              />
              <div
                className={classNames(
                  styles.content,
                  styles[breakpointMediumClassName],
                )}
              >
                <Text Component="h3" weight="medium">
                  {name}
                </Text>
                <Text className={styles.description}>{description}</Text>
                <div className={styles['link-list']}>
                  {links.video && (
                    <Text
                      Component={Link}
                      href={links.video}
                      className={styles['link-item']}
                      target="_blank"
                    >
                      Vídeo de demonstração
                    </Text>
                  )}
                  {links.liveDemo && (
                    <Text
                      Component={Link}
                      href={links.liveDemo}
                      className={styles['link-item']}
                      target="_blank"
                    >
                      Confira o resultado
                    </Text>
                  )}
                  {links.repository && (
                    <Text
                      Component={Link}
                      href={links.repository}
                      className={styles['link-item']}
                      target="_blank"
                    >
                      Confira o repositório no Github
                    </Text>
                  )}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default Projects
