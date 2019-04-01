//import Layout from '../components/Layout.js';
import React from 'react';

import {Layout, Button, ButtonFlow} from 'shared';
//import ButtonFlow from 'shared/ButtonFlow';


const Index = (props) => (
  <Layout>
     <h1>I am Index Page from App1 </h1>

     This is Button is from shared component.
     <Button />


      <ButtonFlow
          primary
          className="flow-button"
        >
          Button Flow Typed
        </ButtonFlow>
  </Layout>
)

export default Index
