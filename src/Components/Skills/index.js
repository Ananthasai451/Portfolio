import SkillCard from '../SkillCard';
import './index.css';

function Skills() {
  return (
      <div className="skills">
      <div className='information-heading'>SKILLS</div>
      <div className='skills-body'>
        <div className='technical-skills'>
          <SkillCard iconUrl='./Resources/Skills/Technical/html.svg' skillTitle='HTML5' skillRating={5} />
          <SkillCard iconUrl='./Resources/Skills/Technical/css.svg' skillTitle='CSS3' skillRating={5} />
          <SkillCard iconUrl='./Resources/Skills/Technical/javascript.svg' skillTitle='JavaScript' skillRating={5} />
          <SkillCard iconUrl='./Resources/Skills/Technical/typescript.svg' skillTitle='TypeScript' skillRating={5} />
        </div>
        <div className='framework-skills'>
          <SkillCard iconUrl='./Resources/Skills/Framework/reactjs.svg' skillTitle='React' skillRating={5} />
          <SkillCard iconUrl='./Resources/Skills/Framework/nextjs.svg' skillTitle='Next' skillRating={4} />
          <SkillCard iconUrl='./Resources/Skills/Framework/nodejs.svg' skillTitle='Node' skillRating={3} />
          <SkillCard iconUrl='./Resources/Skills/Framework/angular.svg' skillTitle='Angular' skillRating={3} />
        </div>
        <div className='tools-skills'>
          <SkillCard iconUrl='./Resources/Contact/github-icon.svg' skillTitle='Git' skillRating={5} />
          <SkillCard iconUrl='./Resources/Skills/Tools/figma.svg' skillTitle='Figma' skillRating={5} />
          <SkillCard iconUrl='./Resources/Skills/Tools/ci-cd.svg' skillTitle='CI/CD' skillRating={5} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
