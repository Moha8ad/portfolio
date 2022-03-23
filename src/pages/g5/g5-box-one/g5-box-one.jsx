import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { boxOne, boxTwo } from '../../../redux/word/word.actions';

import PageBox from '../../../components/g5-components/g5-page-box/g5-page-box.component';

const BoxOne = ({ wordsDayOne, boxOne, boxTwo }) => {

  const boxOneInfo = {
    title: 'Box One',
    boxName:  boxOne,
    db: wordsDayOne,
    nextBox: boxTwo,
    style: 'g5-page-box-one'
  }

  return (
      <PageBox box={boxOneInfo}/>
  );
}

const mapDispatchToProps = dispatch => ({
  boxOne: word => dispatch(boxOne(word)),
  boxTwo: word => dispatch(boxTwo(word))
})

const mapStateToProps = ({ word: {wordsDayOne} }) => ({
  wordsDayOne
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BoxOne));
