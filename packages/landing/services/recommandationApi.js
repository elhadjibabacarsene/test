import React from 'react';
import Axios from 'axios';
import Api from './Api';


function resultRecommandation(state){
  return Axios.post(
    Api.addressApi() + '/api/programmes/recommandation',
    state
  ).then((response) => response.data['recommandation_programme']);
}


export default {
  resultRecommandation
}
