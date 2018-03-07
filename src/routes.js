import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from './views/main'
import Home from './views/home/home'
import AddProject from './views/addProject/addProject'
import Project from './views/project/project'

export default (
	<Route path="/" component={Main}>
		<IndexRoute component={Home} />
		<Route path="/addProject" component={AddProject} />
		<Route path="/project/:address" component={Project} />
	</Route>
)
