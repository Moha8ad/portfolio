import HomepageHeader from '../../../components/g5-components/g5-homepage-header/g5-homepage-header.component.jsx';
import AddNewWord from '../../../components/g5-components/g5-add-new-word/g5-add-new-word.component.jsx';
import G5Box from '../../../components/g5-components/g5-box/g5-box.component.jsx';
import Navbar from '../../../components/g5-components/g5-navbar/g5-navbar.component.jsx';

import './g5-homepage.styles.scss';

const G5Homepage = () => {
  return (
    <div className="g5-homepage">
      <Navbar />
      <HomepageHeader />
      <AddNewWord />
      <G5Box />
    </div>
  );
}

export default G5Homepage;
