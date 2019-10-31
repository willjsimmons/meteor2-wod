import React from 'react';
import { Header , Container, List , Item } from 'semantic-ui-react';


class About extends React.Component {
  render() {
    return (
        <Container text>
        <Header>
          What is stuff?
        </Header>

         Here are some definitions of stuff:
          <List bulleted>
                    <List.Item>matter, material, articles, or activities of a specified or indeterminate kind that are being referred to, indicated, or implied. "she's good at the technical stuff"
                    </List.Item>
                      <List.Item>a person"s belongings, equipment, or baggage. "he took his stuff and went"</List.Item>

            <List.Item>worthless or foolish ideas, speech, or writing; rubbish. "stuff and nonsense!"</List.Item>
        </List>
        </Container>
    );
  }
}

export default About;
