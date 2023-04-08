import CategoryButton from './CategoryButton';
import {useState} from 'react';

const ProjectCatagories = ({categories, onFilterProject}) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    onFilterProject(activeCat);
  }

  return (
      <div className='portfolio__categories'>
        {
          categories.map(category => (
            <CategoryButton key={category} category={category} onChangeCategory={() => changeCategoryHandler(category)} className={`btn cat__btn ${activeCategory == category ? 'primary' : 'white'}`}/>
          ))
        }
      </div>
  )
}

export default ProjectCatagories;