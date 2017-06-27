import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme'

describe('my sweet test', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        expect(div).toMatchSnapshot()
    });
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        expect(div).toMatchSnapshot()
    });
})

describe('my sweet test', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        expect(div).toMatchSnapshot()
    });
    it('renders without crashing', () => {
        const app = mount(<App />)
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        expect(div).toMatchSnapshot()
        expect(app.find('.App-intro').text()).toContain('To get started, edit src/App.js and save to reload.')
    });
    it('clicks it hard corr', () => {
        const app = mount(<App />)
        const instance = app.instance()
        const spy = jest.spyOn(instance, 'myClickFunc')

        const p = app.find('.App-intro')
        p.simulate('click')
        expect(app.state()).toEqual({click: true})
    })
})
