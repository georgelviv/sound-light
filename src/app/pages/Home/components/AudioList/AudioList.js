import { connect } from 'react-redux';
import { AudioListPresentation } from './AudioListPresentation';

const AudioList = connect()(AudioListPresentation);

export { AudioList };