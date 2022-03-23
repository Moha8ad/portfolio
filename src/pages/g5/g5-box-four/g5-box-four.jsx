import { connect } from 'react-redux';

import { boxFour, boxFive } from '../../../redux/word/word.actions';

import PageBox from '../../../components/g5-components/g5-page-box/g5-page-box.component';

const BoxFour = ({ wordsDayFour, boxFour, boxFive }) => {

  const boxFourInfo = {
    title: 'Box Four',
    boxName:  boxFour,
    db: wordsDayFour,
    nextBox: boxFive,
    style: 'g5-page-box-four'
  }

  return (
    <PageBox  box={boxFourInfo}/>
  );
}

const mapDispatchToProps = dispatch => ({
  boxFour: word => dispatch(boxFour(word)),
  boxFive: word => dispatch(boxFive(word))
})

const mapStateToProps = ({ word: {wordsDayFour} }) => ({
  wordsDayFour
})

export default connect(mapStateToProps, mapDispatchToProps)(BoxFour);
