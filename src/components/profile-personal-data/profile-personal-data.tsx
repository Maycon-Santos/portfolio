import React from 'react'
import Text from '@/components/text'
import styles from './profile-personal-data.module.css'

const ProfilePersonalData: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.line}>
                <Text className={styles.label} lineDistance="close">Idade:</Text>
                <Text lineDistance="close">25</Text>
            </div>
            <div className={styles.line}>
                <Text className={styles.label} size="small" lineDistance="close">Endereço:</Text>
                <Text size="small" lineDistance="close">Rio de Janeiro</Text>
            </div>
        </div>
    )
}

export default ProfilePersonalData
