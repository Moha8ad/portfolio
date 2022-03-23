import { connect } from 'react-redux';

import { boxTwo, boxThree } from '../../../redux/word/word.actions';

import PageBox from '../../../components/g5-components/g5-page-box/g5-page-box.component';

const BoxTwo = ({ wordsDayTwo, boxTwo, boxThree }) => {

  const boxTwoInfo = {
    title: 'Box Two',
    boxName:  boxTwo,
    db: wordsDayTwo,
    nextBox: boxThree,
    style: 'g5-page-box-two'
  }

  return (
    <PageBox box={boxTwoInfo}/>
  );
}

const mapDispatchToProps = dispatch => ({
  boxTwo: word => dispatch(boxTwo(word)),
  boxThree: word => dispatch(boxThree(word))
})

const mapStateToProps = ({ word: {wordsDayTwo} }) => ({
  wordsDayTwo
})

export default connect(mapStateToProps, mapDispatchToProps)(BoxTwo);
