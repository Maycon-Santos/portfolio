import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import Text from '@/components/text'
import Divider from '@/components/divider'
import { useBreakpoints } from '@/components/breakpoints'
import { experiences } from '@/data/experiences'
import styles from './experiences.module.css'

const Experiences: React.FC = () => {
  const breakpoints = useBreakpoints()
  const breakpointMediumClassName = breakpoints.medium
    ? 'breakpoint-medium'
    : ''
  const breakpointLargeClassName = breakpoints.large ? 'breakpoint-large' : ''

  return (
    <div className={styles.wrapper}>
      <div className={styles['experience-list']}>
        {experiences.map(
          ({ company, description, logoImage, links, images }, index) => (
            <React.Fragment key={company}>
              {index > 0 && (
                <Divider spacingTop="large" spacingBottom="large" />
              )}
              <div
                className={classNames(
                  styles['experience-item'],
                  styles[breakpointMediumClassName],
                )}
              >
                <Image
                  src={logoImage}
                  className={classNames(
                    styles['logo-image'],
                    styles[breakpointMediumClassName],
                    styles[breakpointLargeClassName],
                  )}
                  alt=""
                />
                <div
                  className={classNames(
                    styles.content,
                    styles[breakpointMediumClassName],
                  )}
                >
                  <Text Component="h3" weight="medium">
                    {company}
                  </Text>
                  <div className={styles.description}>
                    {description.map((paragraph) => (
                      <Text Component="p" key={paragraph}>
                        {paragraph}
                      </Text>
                    ))}
                    <div className={styles['link-list']}>
                      {links?.map(({ text, href }) => (
                        <Text
                          Component="a"
                          href={href}
                          target="_blank"
                          className={styles['link-item']}
                          key={text}
                        >
                          {text}
                        </Text>
                      ))}
                    </div>
                    <div className={styles['image-list']}>
                      {images?.map((image) => (
                        <Image
                          src={image}
                          key={image.src}
                          className={styles['image-item']}
                          alt=""
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ),
        )}
      </div>
    </div>
  )
}

export default Experiences
