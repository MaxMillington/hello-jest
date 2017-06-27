import React from 'react';
import ReactDOM from 'react-dom';
import MyComp from './MyComp';
import { shallow, mount, render } from 'enzyme'

describe('my sweet test', () => {
    it('clicks it hard corr', () => {
        const spy = jest.fn()
        const app = shallow(<MyComp click={spy} />)

        const p = app.find('.App-intro')
        p.simulate('click')
        expect(spy).toHaveBeenCalled()
    })
})
