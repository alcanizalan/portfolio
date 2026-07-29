import InfoBox from './ui/info-box'

import ContentStack from './ui/content-box/content-stack/content-stack'
import ContentProyects from './ui/content-box/content-proyects/content-proyects'
import ContentJob from './ui/content-box/content-job/content-job'
import ContentHobby from './ui/content-box/content-hobby/content-hobby'
import ContentStudies from './ui/content-box/content-studies/content-studies'

import styles from './info.module.css'

export default function Info(){
    return(
        <section className={styles.infoSection}>
            <div className={styles.columna}>
                <InfoBox>
                    <ContentStack />
                </InfoBox>
                <InfoBox>
                    <ContentProyects />
                </InfoBox>
                <InfoBox>
                    <ContentHobby />
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