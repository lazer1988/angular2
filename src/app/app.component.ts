import {Component, OnInit} from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Todo } from './models/todo';

import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    public title = 'The Power of Angular2!';
    public todoName: string;
    public todos: Todo[] = [];

    constructor(private http: Http){}

    ngOnInit(){
        this.getList();
    }

    getList(){
        this.http.get(environment.apiUrl)
            .map(res => res.json())
            .subscribe(res => this.todos = res);
    }

    addTodo(e){
        if(e.keyCode == 13){
            let todo = new Todo();

            todo.name = this.todoName;
            todo.completed = false;

            this.todos.push(todo);

            this.todoName = '';
        }
    }

    removeTodo(todo: Todo){
        let i = this.todos.indexOf(todo);
        if(i > -1){
            this.todos.splice(i,1);
        }
    }

    markDone(todo: Todo){
        todo.completed = !todo.completed;
    }
}
