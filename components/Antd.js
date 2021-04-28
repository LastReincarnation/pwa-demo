import { Slider, Switch } from 'antd';
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import React from 'react'

const Button = styled(Slider)`
        height:24px
`

const theme = {
    color:"red",
  }

export default class Demo extends React.Component {
  state = {
    disabled: false,
  };

  handleDisabledChange = disabled => {
    this.setState({ disabled });
  }

    render() {
        const { disabled } = this.state;
        return (
          <>
          <Button>
            <Slider defaultValue={30} disabled={disabled} />
            <Slider range defaultValue={[20, 50]} disabled={disabled} />
          </Button>
            
            <ThemeProvider theme={theme}>
                Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
            </ThemeProvider>
          </>
        );
      }
    }

