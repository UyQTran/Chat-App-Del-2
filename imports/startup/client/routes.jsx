import {FlowRouter} from 'meteor/kadira:flow-router';
import AppLayout from '../../client/components/app-components/AppLayout.jsx';
import {mount} from 'react-mounter';
import React from 'react';
import LandingPage from '../../client/components/page-components/LandingPage.jsx';
import ChatPage from '/imports/client/components/page-components/ChatPage.jsx';
import JoinPage from '/imports/client/components/page-components/JoinPage.jsx';
import LoginPage from "../../client/components/app-components/LoginPage";



FlowRouter.route('/', {
    name: 'rootview',
    action(props) {
        mount(AppLayout, {
            body: (<LandingPage/>)
        });
    }
});

FlowRouter.route('/chat-room/:pin', {
    name: 'chat-room',
    action({pin}) {
        mount(AppLayout, {
            body: (<ChatPage roomNumber={pin}/>)
        });
    }
});

FlowRouter.route('/join', {
    name: 'join',
    action() {
        mount(AppLayout, {
            body: (<JoinPage/>)
        });
    }
});

FlowRouter.notFound = {
    action() {
        mount(AppLayout, {
            body: (<p>404 siden finnes ikke</p>)
        });
    }
};