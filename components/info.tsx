import InfoBox from './ui/info-box'

import ContentStack from './ui/content-box/content-stack/content-stack'
import ContentJob from './ui/content-box/content-job/content-job'
import ContentStudies from './ui/content-box/content-studies/content-studies'
import ContentLanguaje from './ui/content-box/content-languajes/content-languajes'

import styles from './info.module.css'

export default function Info(){
    return(
        <section className={styles.infoSection}>
            <div className={styles.columna}>
                <InfoBox>
                    <ContentStack />
                </InfoBox>
                <InfoBox>
                    <ContentLanguaje />
                </InfoBox>
                
            </div>
            <div className={styles.columna}>
                <InfoBox>
                    <ContentJob />
                </InfoBox>
                <InfoBox>
                    <ContentStudies />
                </InfoBox>
            </div>
        </section>
    )
}