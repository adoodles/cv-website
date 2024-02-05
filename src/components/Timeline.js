import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap, faStar } from '@fortawesome/free-solid-svg-icons';

const Timeline = () => {

  return (
    <VerticalTimeline lineColor='gray'>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(245, 245, 245)' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(245, 245, 245)' }}
        date="2023 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBriefcase} />}
    >
        <h3 className="vertical-timeline-element-title">Research Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">NUS, Singapore</h4>
        <p>
        Microbiome data analysis, frontend web dev, CI/CD
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(245, 245, 245)' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(245, 245, 245)' }}
        date="2022 - 2023"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faGraduationCap} />}
    >
        <h3 className="vertical-timeline-element-title">MSc in AI in Biomedicine & Healthcare</h3>
        <h4 className="vertical-timeline-element-subtitle">UCL, United Kingdom</h4>
        <p>
        Artificial intelligence, machine learning, bioinformatics
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(245, 245, 245)' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(245, 245, 245)' }}
        date="May 2021"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBriefcase} />}
    >
        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Autodesk, Singapore</h4>
        <p>
        Software dev, CI/CD, software testing
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(245, 245, 245)' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(245, 245, 245)' }}
        date="2018 - 2022"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faGraduationCap} />}
    >
        <h3 className="vertical-timeline-element-title">Bachelor in Computing</h3>
        <h4 className="vertical-timeline-element-subtitle">NUS, Singapore</h4>
        <p>
        Artificial Intelligence, Software Development, Database, Networking
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faStar} />}
    />
    </VerticalTimeline>
  )
}

export default Timeline;