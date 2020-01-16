import React, { useState, useEffect, useContext } from "react";

//useState = access state without using classes
//state variable
//hooks allow you to reuse stateful logic without changing your component hierarchy
//this lets you attach reusable behavior to a component

//useState returns a pair - current state value and an update function (called from an event handler)
    //contains an argument (the initial state)
    //update function works similar to setState

//effect - operations that affect other components and can't be done during rendering
// ex. logging in affects access for users
// serves same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount
//react runs effects after every render, including the first one
//effects can access props and state