import Image from 'next/image'
import classNames from 'classnames'
import { useRef } from 'react'
import wavingDoorwayImage from '@/assets/waving-doorway.png'
import Text from '@/components/text'
import Section from '@/components/section'
import Button from '@/components/button'
import { useBreakpoints, breakpointMatches } from '@/components/breakpoints'
import { bannerText, bannerTitle } from '@/data/banner'
import styles from './banner.module.css'

const Banner: React.FC = () => {
  const breakpoints = useBreakpoints()
  const refWrapper = useRef<HTMLDivElement>(null)

  const breakPointMediumClassName = {
    [styles['breakpoint-medium']]: breakpointMatches(breakpoints, {
      min: false,
      medium: true,
    }),
  }

  return (
    <div className={styles.wrapper} ref={refWrapper}>
      <Image
        className={classNames(
          styles['background-image'],
          breakPointMediumClassName,
        )}
        src={wavingDoorwayImage}
        alt=""
      />
      <Section
        Component="div"
        className={classNames(
          styles['content-wrapper'],
          breakPointMediumClassName,
        )}
      >
        <Text
          Component="h1"
          weight="black"
          size={breakpointMatches(breakpoints, {
            min: 'giant',
            medium: 'extra-giant',
          })}
        >
          {bannerTitle}
        </Text>
        <Text>{bannerText}</Text>
        <Button
          className={styles['know-more-button']}
          color="cyan"
          onClick={() => {
            window.scrollTo({
              top: refWrapper.current?.clientHeight,
              behavior: 'smooth',
            })
          }}
        >
          SAIBA MAIS
        </Button>
      </Section>
    </div>
  )
}

export default Banner
