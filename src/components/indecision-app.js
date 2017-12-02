import React from 'react';

import Header from './header';
import Action from './action';
import AddOption from './add-option';
import Options from './options';
import OptionModal from './option-modal';

export default class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid value to add option';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };
  handlePickOption = () => {
    const idx = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[idx];
    this.setState(() => ({ selectedOption: option }));
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  componentDidMount = () => {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing. Fall back to default value(s).
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.options.length !== prevState.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  };
  componentWillUnmount = () => {
    console.log('componentWillUnmount');
  };
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePickOption={this.handlePickOption}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
             />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
