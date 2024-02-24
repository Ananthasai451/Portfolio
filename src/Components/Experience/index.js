import './index.css';

function Experience() {
  return (
      <div className="experience">
          <div className='information-heading'>Professional Experience</div>
          <div className='experience-body'>
              <div className='timeline'>
                  <div className='timeline-years'>
                      <div className='year'>2022 <div className='circle' /></div>
                      <div className='year'>2023 <div className='circle' /></div>
                      <div className='year'>2024 <div className='circle' /></div>
                  </div>
                  <div className='timeline-indicator' />
              </div>
              <div className='experience-details'>
            <div className='role'><b>Software Development Engineer</b></div>
            <div className='company'>Zopsmart Technologies <b>(Feb, 2022 - Present)</b></div>
            <ul className='role-highlights'>
                <li className='highlight-point'>Led the end-to-end development of an inflential educational platform, earning praise for exceptional project management</li>
                <li className='highlight-point'>Headed the frontend team for  pivotal retail inventory project, contributing to an impressive 20% revenue increase</li>
                <li className='highlight-point'>Recognised for leadership by introducing Typescript, implementing rigorous testing, driving impactful tech updates</li>
                  </ul>
                  </div>
          </div>
    </div>
  );
}

export default Experience;
