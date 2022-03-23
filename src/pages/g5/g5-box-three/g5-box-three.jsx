import { connect } from 'react-redux';

import { boxThree, boxFour } from '../../../redux/word/word.actions';

import PageBox from '../../../components/g5-components/g5-page-box/g5-page-box.component';
const BoxThree = ({ wordsDayThree, boxThree, boxFour }) => {

  const boxThreeInfo = {
    title: 'Box Three',
    boxName:  boxThree,
    db: wordsDayThree,
    nextBox: boxFour,
    style: 'g5-page-box-three'
  }

  return (
    <PageBox box={boxThreeInfo}/>
  );
}

const mapDispatchToProps = dispatch => ({
  boxThree: word => dispatch(boxThree(word)),
  boxFour: word => dispatch(boxFour(word))
})

const mapStateToProps = ({ word: {wordsDayThree} }) => ({
  wordsDayThree
})

export default connect(mapStateToProps, mapDispatchToProps)(BoxThree);
