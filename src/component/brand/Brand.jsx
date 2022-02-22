import React from 'react';
import './brand.css'
import { google, atlassian, slack, dropbox, shopify } from './import'

export default function Brand() {
    return (
        <div>
            <div className="gpt3__brand section__padding">
                <div className="">
                    <img src={google} alt='google'/>
                </div>
                <div className="">
                    <img src={slack} alt='slack'/>
                </div>
                <div className="">
                    <img src={atlassian} alt='atlassian'/>
                </div>
                <div className="">
                    <img src={shopify} alt='shopify'/>
                </div>
                <div className="">
                    <img src={dropbox} alt='dropbox'/>
                </div>
            </div>
        </div>
    )
}
