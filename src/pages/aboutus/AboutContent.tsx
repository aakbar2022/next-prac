import { About1Icon, About2Icon, About3Icon, About4Icon, About5Icon, About6Icon, HomeIcon } from "@/assets/images";
import styles from '../../components/Timeline.module.css';

function AboutContent() {
    const items = [
        { image:<About1Icon/>, date: '12 May 2022 - 14 July 2022', title: 'Brainstorming', description: 'This is the first item\'s accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.' },
        { image:<About2Icon/>, date: '12 May 2022 - 14 July 2022', title: 'Design', description: 'This is the first item\'s accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.' },
        { image:<About3Icon/>, date: '12 May 2022 - 14 July 2022', title: 'Development', description: 'This is the first item\'s accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.' },
        { image:<About4Icon/>, date: '12 May 2022 - 14 July 2022', title: 'Marketing', description: 'This is the first item\'s accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.' },
        { image:<About5Icon/>, date: '12 May 2022 - 14 July 2022', title: 'Additional Features', description: 'This is the first item\'s accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.' },
        { image:<About6Icon/>, date: '12 May 2022 - 14 July 2022', title: 'Title will go here, even long titles can hold', description: 'This is the first item\'s accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.' },
    ];


    return (
        <div className="container" style={{paddingBottom: "70px"}}>
            <div className="d-flex justify-content-center">
                <h1
                    className="text-center heading_sec2">
                    Journey map of my housing options{" "}<HomeIcon />
                </h1>
            </div>
            <div className={`container ${styles.timeline}`}>
                {items.map((item, index) => (
                    <div key={index} className={`${styles.timelineItem}`}>
                        <div className={`${index % 2 === 0 ? styles.left : ''}`}>
                            {index % 2 === 0 && (
                                <div className={styles.content}>
                                    {item.image}
                                    <h6 className={`fw-semibold subTextColor ${styles.about_date_style}`}>{item.date}</h6>
                                    <h5 className={`fw-semibold defultBlackColor ${styles.about_title_style}`}>{item.title}</h5>
                                    <p className={`fw-normal defultBlackColor ${styles.about_desc_style}`}>{item.description}</p>
                                </div>
                            )}
                        </div>
                        <div className={`${index % 2 !== 0 ? styles.right : ''}`}>
                            {index % 2 !== 0 && (
                                <div className={styles.content}>
                                    {item.image}
                                    <h6 className={`fw-semibold subTextColor ${styles.about_date_style}`}>{item.date}</h6>
                                    <h5 className={`fw-semibold defultBlackColor ${styles.about_title_style}`}>{item.title}</h5>
                                    <p className={`fw-normal defultBlackColor ${styles.about_desc_style}`}>{item.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                <div className={styles.currentStage}>Current Stage</div>
            </div>
        </div>

    );
}

export default AboutContent;
