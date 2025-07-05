import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { Bolt } from './components/bolt/bolt';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { ControlFlow } from './components/control-flow/control-flow';
import { AttDirective } from './components/att-directive/att-directive';
import { LCycleEvent } from './components/lcycle-event/lcycle-event';
import { GetAPI } from './components/get-api/get-api';
import { User } from './components/user/user';
import { ReactiveUser } from './components/reactive-user/reactive-user';
import { PipeEx } from './components/pipe-ex/pipe-ex';
import { ResourceAPI } from './components/resource-api/resource-api';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'login',
        pathMatch : 'full'
    },
    {
        path : 'login',
        component : Login
    },
    {
        path : '',
        component : Layout,
        children : [
            {
                path : 'admin',
                component : Admin
            }, 
            {
                path : 'bolt',
                component : Bolt
            },
            {
                path : 'databinding',
                component : DataBinding
            },
            {
                path : 'signal',
                component : SignalEx
            },
            {
                path : 'controlflow',
                component : ControlFlow
            },
            {
                path : 'att-directive',
                component : AttDirective
            },
            {
                path : 'life-cycle-event',
                component : LCycleEvent
            },
            {
                path : 'get-api',
                component :  GetAPI
            },
            {
                path : 'users',
                component : User
            },
            {
                path : 'reactive-user',
                component : ReactiveUser
            },
            {
                path : 'pipe',
                component : PipeEx
            },
            {
                path : 'resource-api',
                component : ResourceAPI
            }
        ]
    }
    
];
