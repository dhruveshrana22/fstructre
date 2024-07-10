import { Divider, Flex } from 'antd';
import Grid from 'antd/es/card/Grid';
import React from 'react';

const App = () => (
  <Flex vertical style={{ padding: 20 }}>
    <Grid style={{ backgroundColor: 'red' }}>
      <h1>My Application</h1>
      <Divider>Section 1</Divider>
      <p>Content for section 1.</p>
      <Divider orientation="left" dashed>
        Section 2
      </Divider>
      <p>Content for section 2.</p>
      <Divider orientation="right" plain={false}>
        Section 3
      </Divider>
      <p>Content for section 3.</p>
      <Divider type="vertical">
        Vertical
      </Divider>
    </Grid>
    <Flex>
      <Grid style={{ backgroundColor: 'yellow' }}>
        Dhruvesh
      </Grid>
    </Flex>
  </Flex>

);

export default App;
