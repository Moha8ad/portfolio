import { connect } from 'react-redux';

import { boxFive, boxArchive } from '../../../redux/word/word.actions.js';

import PageBox from '../../../components/g5-components/g5-page-box/g5-page-box.component';

const BoxFive = ({ wordsDayFive, boxFive, boxArchive }) => {

  const boxFiveInfo = {
    title: 'Box Five',
    boxName:  boxFive,
    db: wordsDayFive,
    nextBox: boxArchive,
    style: 'g5-page-box-five'
  }

  return (
    <PageBox box={boxFiveInfo}/>
  );
}

const mapDispatchToProps = dispatch => ({
  boxFive: word => dispatch(boxFive(word)),
  boxArchive: word => dispatch(boxArchive(word))
})

const mapStateToProps = ({ word: {wordsDayFive} }) => ({
  wordsDayFive
})

export default connect(mapStateToProps, mapDispatchToProps)(BoxFive);
