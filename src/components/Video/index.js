import React from 'react';

import { connect } from 'react-redux';
// import { Container } from './styles';

const Video = ({ activeModule, activeLesson }) => (
  <div>
      <strong>Modulo:{activeModule.title} </strong>
      <br></br>
      <strong>Aula: {activeLesson.title}</strong>
  </div>
);

export default connect( state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video);
