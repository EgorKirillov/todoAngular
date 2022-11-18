"use strict";
(self["webpackChunkngTodo"] = self["webpackChunkngTodo"] || []).push([["src_app_todos_todos_module_ts"],{

/***/ 174:
/*!*********************************************************!*\
  !*** ./src/app/tasks/components/task/task.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskComponent": () => (/* binding */ TaskComponent)
/* harmony export */ });
/* harmony import */ var _models_tasks_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/tasks.models */ 9354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tasks.service */ 4263);
/* harmony import */ var _shared_components_editable_name_editable_name_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/editable-name/editable-name.component */ 8877);




class TaskComponent {
    constructor(tasksService) {
        this.tasksService = tasksService;
        this.taskComplited = false;
    }
    deleteTask() {
        this.tasksService.deleteTask(this.task.todoListId, this.task.id);
    }
    changeTaskTitle(newTitle) {
        this.tasksService.updateTaskTitle(this.task.todoListId, this.task.id, newTitle);
    }
    changeTaskStatus() {
        event?.preventDefault();
        const newStatus = this.task.status === _models_tasks_models__WEBPACK_IMPORTED_MODULE_0__.TaskStatuses.New ? _models_tasks_models__WEBPACK_IMPORTED_MODULE_0__.TaskStatuses.Complited : _models_tasks_models__WEBPACK_IMPORTED_MODULE_0__.TaskStatuses.New;
        console.log('change status');
        this.tasksService.updateTaskStatus(this.task.todoListId, this.task.id, newStatus);
    }
    ngOnInit() {
        this.taskComplited = this.task.status === _models_tasks_models__WEBPACK_IMPORTED_MODULE_0__.TaskStatuses.Complited;
    }
}
TaskComponent.ɵfac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_tasks_service__WEBPACK_IMPORTED_MODULE_1__.TasksService)); };
TaskComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TaskComponent, selectors: [["tdl-task"]], inputs: { task: "task" }, decls: 5, vars: 4, consts: [["type", "checkbox", 3, "checked", "click"], [3, "name", "changeName"], [3, "click"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaskComponent_Template_input_click_0_listener() { return ctx.changeTaskStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tdl-editable-name", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changeName", function TaskComponent_Template_tdl_editable_name_changeName_1_listener($event) { return ctx.changeTaskTitle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_3_listener() { return ctx.deleteTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.taskComplited);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx.task.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("\n", ctx.task.completed, "\n", ctx.task.order, "\n");
    } }, dependencies: [_shared_components_editable_name_editable_name_component__WEBPACK_IMPORTED_MODULE_2__.EditableNameComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4272:
/*!***********************************************************!*\
  !*** ./src/app/tasks/components/tasks/tasks.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksComponent": () => (/* binding */ TasksComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/tasks.service */ 4263);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/add-item/add-item.component */ 9814);
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task/task.component */ 174);






function TasksComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "tdl-task", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("task", task_r1);
  }
}
class TasksComponent {
  constructor(tasksService) {
    this.tasksService = tasksService;
    this.tasks$ = this.tasksService.tasks$;
    this.tasksById$ = this.tasksService.tasks$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(res => res[this.todoId]));
  }
  changeTaskTitle(newTitle, taskId) {
    this.tasksService.updateTaskTitle(this.todoId, taskId, newTitle);
  }
  deleteTask(taskId) {
    this.tasksService.deleteTask(this.todoId, taskId);
  }
  createNewTask(taskTitle) {
    this.tasksService.createTask(this.todoId, taskTitle);
  }
  ngOnInit() {
    this.tasksService.getTasks(this.todoId);
    console.log('task');
  }
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) {
  return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_tasks_service__WEBPACK_IMPORTED_MODULE_0__.TasksService));
};
TasksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TasksComponent,
  selectors: [["tdl-tasks"]],
  inputs: {
    todoId: "todoId"
  },
  decls: 4,
  vars: 3,
  consts: [[1, "taskContainer"], ["placeholder", "add task name", 3, "addItem"], ["class", "task", 4, "ngFor", "ngForOf"], [1, "task"], [3, "task"]],
  template: function TasksComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "tdl-add-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("addItem", function TasksComponent_Template_tdl_add_item_addItem_1_listener($event) {
        return ctx.createNewTask($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TasksComponent_div_2_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx.tasksById$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _shared_components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_1__.AddItemComponent, _task_task_component__WEBPACK_IMPORTED_MODULE_2__.TaskComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: [".taskContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  background-color: #afcbe6;\n  margin-top: 20px;\n}\n\n.task[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBRUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoidGFza3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFza0NvbnRhaW5lciB7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZjYmU2O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnRhc2t7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 9354:
/*!**********************************************!*\
  !*** ./src/app/tasks/models/tasks.models.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskPriorities": () => (/* binding */ TaskPriorities),
/* harmony export */   "TaskStatuses": () => (/* binding */ TaskStatuses)
/* harmony export */ });
var TaskStatuses;
(function (TaskStatuses) {
    TaskStatuses[TaskStatuses["New"] = 0] = "New";
    TaskStatuses[TaskStatuses["InProgress"] = 1] = "InProgress";
    TaskStatuses[TaskStatuses["Complited"] = 2] = "Complited";
    TaskStatuses[TaskStatuses["Draft"] = 3] = "Draft";
})(TaskStatuses || (TaskStatuses = {}));
var TaskPriorities;
(function (TaskPriorities) {
    TaskPriorities[TaskPriorities["Low"] = 0] = "Low";
    TaskPriorities[TaskPriorities["Middle"] = 1] = "Middle";
    TaskPriorities[TaskPriorities["Hi"] = 2] = "Hi";
    TaskPriorities[TaskPriorities["Urgently"] = 3] = "Urgently";
    TaskPriorities[TaskPriorities["Later"] = 4] = "Later";
})(TaskPriorities || (TaskPriorities = {}));


/***/ }),

/***/ 4263:
/*!*************************************************!*\
  !*** ./src/app/tasks/services/tasks.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksService": () => (/* binding */ TasksService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _core_services_beaty_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/beaty-logger.service */ 7650);





class TasksService {
    constructor(http, beatyLoggerService) {
        this.http = http;
        this.beatyLoggerService = beatyLoggerService;
        this.tasks$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
    }
    // tasksByTodoId$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([])
    errorHandler(err) {
        this.beatyLoggerService.log(err.message, 'error');
        return rxjs__WEBPACK_IMPORTED_MODULE_3__.EMPTY;
    }
    getTasks(todoId) {
        this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/todo-lists/${todoId}/tasks`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler.bind(this)))
            .subscribe(res => {
            this.tasks$.next({ ...this.tasks$.getValue(), [todoId]: res.items });
        });
    }
    createTask(todoId, title) {
        this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/todo-lists/${todoId}/tasks`, { title })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler.bind(this)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(res => {
            const newTask = res.data.item;
            const stateTasks = this.tasks$.getValue();
            stateTasks[todoId].unshift(newTask);
            return stateTasks;
        }))
            .subscribe(tasks => {
            this.tasks$.next(tasks);
        });
    }
    deleteTask(todoId, taskId) {
        return this.http
            .delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/todo-lists/${todoId}/tasks/${taskId}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler.bind(this)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
            const stateTask = this.tasks$.getValue();
            stateTask[todoId] = stateTask[todoId].filter(task => task.id !== taskId);
            return stateTask;
        }))
            .subscribe(tasks => {
            this.tasks$.next(tasks);
        });
    }
    updateTaskTitle(todoId, taskId, title) {
        const oldTask = this.tasks$.getValue()[todoId].find(task => task.id === taskId);
        const newTask = { ...this._createUpdateTaskModel(oldTask, 'title', title) };
        return this._updateTask(todoId, taskId, newTask);
    }
    updateTaskStatus(todoId, taskId, status) {
        const oldTask = this.tasks$.getValue()[todoId].find(task => task.id === taskId);
        const newTask = { ...this._createUpdateTaskModel(oldTask, 'status', status) };
        return this._updateTask(todoId, taskId, newTask);
    }
    _updateTask(todoId, taskId, newTask) {
        const stateTasks = this.tasks$.getValue();
        return this.http
            .put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/todo-lists/${todoId}/tasks/${taskId}`, newTask)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler.bind(this)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(res => {
            return stateTasks[todoId].map(task => (task.id === taskId ? res.data.item : task));
        }))
            .subscribe(tasks => {
            this.tasks$.next({ ...stateTasks, [todoId]: [...tasks] });
        });
    }
    _createUpdateTaskModel(task = {}, key, value) {
        const taskModel = {
            title: task.title,
            status: task.status,
            deadline: task.deadline,
            description: task.description,
            priority: task.priority,
            startDate: task.startDate,
            [key]: value,
        };
        return taskModel;
    }
    //  костыль как заменить
    createUpdateTaskModel(task = {}) {
        const taskModel = {
            title: task.title && ' ',
            status: task.status,
            deadline: task.deadline,
            description: task.description,
            priority: task.priority,
            startDate: task.startDate,
        };
        return taskModel;
    }
}
TasksService.ɵfac = function TasksService_Factory(t) { return new (t || TasksService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_core_services_beaty_logger_service__WEBPACK_IMPORTED_MODULE_1__.BeatyLoggerService)); };
TasksService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: TasksService, factory: TasksService.ɵfac });


/***/ }),

/***/ 9756:
/*!***************************************!*\
  !*** ./src/app/tasks/tasks.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksModule": () => (/* binding */ TasksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tasks/tasks.component */ 4272);
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/tasks.service */ 4263);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _components_task_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/task/task.component */ 174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class TasksModule {
}
TasksModule.ɵfac = function TasksModule_Factory(t) { return new (t || TasksModule)(); };
TasksModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TasksModule });
TasksModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_services_tasks_service__WEBPACK_IMPORTED_MODULE_1__.TasksService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TasksModule, { declarations: [_components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__.TasksComponent, _components_task_task_component__WEBPACK_IMPORTED_MODULE_3__.TaskComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule], exports: [_components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__.TasksComponent] }); })();


/***/ }),

/***/ 5681:
/*!*********************************************************!*\
  !*** ./src/app/todos/components/todo/todo.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoComponent": () => (/* binding */ TodoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/todos.service */ 7313);
/* harmony import */ var _shared_components_editable_name_editable_name_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/editable-name/editable-name.component */ 8877);
/* harmony import */ var _tasks_components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../tasks/components/tasks/tasks.component */ 4272);




class TodoComponent {
    constructor(todosService) {
        this.todosService = todosService;
        this.newTitle = '';
    }
    getNewTitle(newTitle) {
        this.newTitle = newTitle;
        this.updateTodosTitle();
    }
    deleteTodo() {
        this.todosService.deleteTodos(this.todo.id);
    }
    updateTodosTitle() {
        console.log('update title');
        this.todosService.updateTodosTitle(this.todo.id, this.newTitle);
    }
    ngOnInit() {
        console.log('td');
    }
}
TodoComponent.ɵfac = function TodoComponent_Factory(t) { return new (t || TodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_todos_service__WEBPACK_IMPORTED_MODULE_0__.TodosService)); };
TodoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TodoComponent, selectors: [["tdl-todo"]], inputs: { todo: "todo" }, decls: 5, vars: 2, consts: [[1, "title"], [3, "name", "changeName"], [1, "buttonDel", 3, "click"], [3, "todoId"]], template: function TodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "tdl-editable-name", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changeName", function TodoComponent_Template_tdl_editable_name_changeName_1_listener($event) { return ctx.getNewTitle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TodoComponent_Template_button_click_2_listener() { return ctx.deleteTodo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "tdl-tasks", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx.todo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("todoId", ctx.todo.id);
    } }, dependencies: [_shared_components_editable_name_editable_name_component__WEBPACK_IMPORTED_MODULE_1__.EditableNameComponent, _tasks_components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_2__.TasksComponent], styles: [".title[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-size: 24px;\n  font-weight: 500;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n\n.buttonDel[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-size: 9px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJ0b2RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG4uYnV0dG9uRGVse1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2612:
/*!***********************************************************!*\
  !*** ./src/app/todos/components/todos/todos.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodosComponent": () => (/* binding */ TodosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/todos.service */ 7313);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/add-item/add-item.component */ 9814);
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo/todo.component */ 5681);





function TodosComponent_h1_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function TodosComponent_ng_template_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "tdl-todo", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const todo_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("todo", todo_r4);
  }
}
function TodosComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tdl-add-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("addItem", function TodosComponent_ng_template_1_Template_tdl_add_item_addItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.createTodosHandler($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TodosComponent_ng_template_1_div_2_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx_r2.todos$));
  }
}
class TodosComponent {
  constructor(todosService) {
    this.todosService = todosService;
    this.error = '';
    this.todos$ = this.todosService.todos$;
  }
  createTodosHandler(title) {
    if (this.todosService.getTodosLength() < 10) {
      console.log(this.todosService.getTodosLength());
      console.log('create TODO with title: ' + title);
      this.todosService.createTodos(title);
    } else {
      this.error = 'too many Todos';
      setTimeout(() => {
        this.error = '';
      }, 1000);
    }
  }
  getTodos() {
    this.todosService.getTodos();
  }
  ngOnInit() {
    console.log('start todos');
    this.getTodos();
  }
}
TodosComponent.ɵfac = function TodosComponent_Factory(t) {
  return new (t || TodosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_todos_service__WEBPACK_IMPORTED_MODULE_0__.TodosService));
};
TodosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TodosComponent,
  selectors: [["tdl-todos"]],
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["content", ""], ["placeholder", "create new ToDo", 3, "addItem"], [1, "todos"], ["class", "todo", 4, "ngFor", "ngForOf"], [1, "todo"], [3, "todo"]],
  template: function TodosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TodosComponent_h1_0_Template, 2, 1, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TodosComponent_ng_template_1_Template, 4, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !!ctx.error)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_1__.AddItemComponent, _todo_todo_component__WEBPACK_IMPORTED_MODULE_2__.TodoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: [".todos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: left;\n  align-items: flex-start;\n}\n\n.todo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  border: solid 2px rgba(0, 0, 0, 0.29);\n  margin: 10px 10px 10px 0;\n  padding: 15px;\n  background-color: #c6d7ea;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNGIiwiZmlsZSI6InRvZG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG9ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxufVxyXG4udG9kb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgYm9yZGVyOiBzb2xpZCAycHggcmdiYSgwLCAwLCAwLCAwLjI5KTtcclxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDA7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZkN2VhO1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 7313:
/*!*************************************************!*\
  !*** ./src/app/todos/services/todos.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodosService": () => (/* binding */ TodosService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _core_services_beaty_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/beaty-logger.service */ 7650);





class TodosService {
    constructor(http, beatyLoggerService) {
        this.http = http;
        this.beatyLoggerService = beatyLoggerService;
        this.todos$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    errorHandler(err) {
        this.beatyLoggerService.log(err.message, 'error');
        return rxjs__WEBPACK_IMPORTED_MODULE_3__.EMPTY;
    }
    getTodosLength() {
        return this.todos$.getValue().length;
    }
    getTodos() {
        this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/todo-lists`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler.bind(this)))
            .subscribe(todos => {
            this.todos$.next(todos);
        });
    }
    createTodos(title) {
        this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/todo-lists`, { title })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler.bind(this)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(res => {
            const newTodo = res.data.item;
            const stateTodos = this.todos$.getValue();
            return [...stateTodos, newTodo];
        }))
            .subscribe(todos => {
            this.todos$.next(todos);
        });
    }
    deleteTodos(deletedID) {
        return this.http
            .delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/todo-lists/${deletedID}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler.bind(this)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
            return this.todos$.getValue().filter(td => td.id !== deletedID);
        }))
            .subscribe(todos => {
            this.todos$.next(todos);
        });
    }
    updateTodosTitle(todoId, title) {
        return this.http
            .put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/todo-lists/${todoId}`, { title })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler.bind(this)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
            return this.todos$.getValue().map(td => (td.id === todoId ? { ...td, title: title } : td));
        }))
            .subscribe(todos => {
            this.todos$.next(todos);
        });
    }
}
TodosService.ɵfac = function TodosService_Factory(t) { return new (t || TodosService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_core_services_beaty_logger_service__WEBPACK_IMPORTED_MODULE_1__.BeatyLoggerService)); };
TodosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: TodosService, factory: TodosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2331:
/*!***********************************************!*\
  !*** ./src/app/todos/todos-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodosRoutingModule": () => (/* binding */ TodosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/todos/todos.component */ 2612);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/guards/auth.guard */ 7574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{ path: '', component: _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_0__.TodosComponent, canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard] }];
class TodosRoutingModule {
}
TodosRoutingModule.ɵfac = function TodosRoutingModule_Factory(t) { return new (t || TodosRoutingModule)(); };
TodosRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TodosRoutingModule });
TodosRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TodosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 7305:
/*!***************************************!*\
  !*** ./src/app/todos/todos.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodosModule": () => (/* binding */ TodosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _todos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos-routing.module */ 2331);
/* harmony import */ var _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/todos/todos.component */ 2612);
/* harmony import */ var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todo/todo.component */ 5681);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _tasks_tasks_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tasks/tasks.module */ 9756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);







class TodosModule {
}
TodosModule.ɵfac = function TodosModule_Factory(t) { return new (t || TodosModule)(); };
TodosModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: TodosModule });
TodosModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _todos_routing_module__WEBPACK_IMPORTED_MODULE_0__.TodosRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _tasks_tasks_module__WEBPACK_IMPORTED_MODULE_4__.TasksModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TodosModule, { declarations: [_components_todos_todos_component__WEBPACK_IMPORTED_MODULE_1__.TodosComponent, _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_2__.TodoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _todos_routing_module__WEBPACK_IMPORTED_MODULE_0__.TodosRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _tasks_tasks_module__WEBPACK_IMPORTED_MODULE_4__.TasksModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_todos_todos_module_ts.js.map