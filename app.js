"use strict";
const express = require('express');
const demoApi = require('./api');
// initialize our express app
var app = express();
// initialize our classes
const controllers = demoApi.initializeControllers();
demoApi.registerRouter(controllers);
// register our api middleware on express
app.use(demoApi.getMiddleware());
// run!
app.listen(3001, () => console.log('Listening on port 3001'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUNuQyxNQUFZLE9BQU8sV0FBTSxPQUFPLENBQUMsQ0FBQTtBQUVqQyw2QkFBNkI7QUFDN0IsSUFBSSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFcEIseUJBQXlCO0FBQ3pCLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFcEMseUNBQXlDO0FBQ3pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7QUFFakMsT0FBTztBQUNQLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgZGVtb0FwaSBmcm9tICcuL2FwaSc7XG5cbi8vIGluaXRpYWxpemUgb3VyIGV4cHJlc3MgYXBwXG52YXIgYXBwID0gZXhwcmVzcygpO1xuXG4vLyBpbml0aWFsaXplIG91ciBjbGFzc2VzXG5jb25zdCBjb250cm9sbGVycyA9IGRlbW9BcGkuaW5pdGlhbGl6ZUNvbnRyb2xsZXJzKCk7XG5kZW1vQXBpLnJlZ2lzdGVyUm91dGVyKGNvbnRyb2xsZXJzKTtcblxuLy8gcmVnaXN0ZXIgb3VyIGFwaSBtaWRkbGV3YXJlIG9uIGV4cHJlc3NcbmFwcC51c2UoZGVtb0FwaS5nZXRNaWRkbGV3YXJlKCkpO1xuXG4vLyBydW4hXG5hcHAubGlzdGVuKDMwMDEsICgpID0+IGNvbnNvbGUubG9nKCdMaXN0ZW5pbmcgb24gcG9ydCAzMDAxJykpOyJdfQ==