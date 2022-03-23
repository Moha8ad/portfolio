import { connect } from 'react-redux';

import { boxArchive, boxOne } from '../../../redux/word/word.actions.js';

import PageBox from '../../../components/g5-components/g5-page-box/g5-page-box.component';

const BoxArchive = ({ wordsArchive, boxArchive, boxOne }) => {

  const boxArchiveInfo = {
    title: 'Box Archive',
    boxName:  boxArchive,
    db: wordsArchive,
    nextBox: boxOne,
    style: 'g5-page-box-archive'
  }

  return (
    <PageBox box={boxArchiveInfo}/>
  );
}

const mapDispatchToProps = dispatch => ({
  boxArchive: word => dispatch(boxArchive(word)),
  boxOne: word => dispatch(boxOne(word))
})

const mapStateToProps = ({ word: {wordsArchive} }) => ({
  wordsArchive
})

export default connect(mapStateToProps, mapDispatchToProps)(BoxArchive);
