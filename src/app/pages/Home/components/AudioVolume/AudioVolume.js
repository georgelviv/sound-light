import { connect } from 'react-redux';
import { AudioVolumePresentation } from './AudioVolumePresentation';

const AudioVolume = connect()(AudioVolumePresentation);

export { AudioVolume } 