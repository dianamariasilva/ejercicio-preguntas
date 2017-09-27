"use strict";

const app ={
    init: function(){
        var btnAdd = document.getElementById("add");
        var btnAll = document.getElementById("all");
        var btnfilter = document.getElementById("filter");
        var laboratoria = [];
        document.getElementById("btnAdd").addEventListener("onclick", app.btnAdd);
        document.getElementById("btnAll").addEventListener("onclick", app.btnAll);
        document.getElementById("btnAll").addEventListener("onclick", app.btnfilter);
        document.getElementById("btnAll").addEventListener("onclick", app.btnfilterDown);
    },

    student = {
        name: undefined,
        techPoints: undefined,
        lifePoints: undefined,
        status: true,
    },

    addStudent: function() {
        name: prompt("Please enter student name", "Diana Silva");
        techPoints: prompt("Tech Point", "80%");
        lifePoints: prompt("Tech Point", "90%");
        status: true;
        laboratoria.push(student);

        console.log(laboratoria);

        if (student.name != null && student.techPoints != null && student.lifePoints != null) {
            document.getElementById("name").innerHTML = "Student Name:" + student.name;
            document.getElementById("tech").innerHTML = "TechPoints:" + student.techPoints;
            document.getElementById("life").innerHTML = "Life Points:" + student.lifePoints;
            document.getElementById("status").innerHTML = "Status: active";
        }
    },

    btnAdd: function(){
        addStudent();
    },

    getPerson: function(item, index) {
        return `<div class="div1">\
            <p class:"first">Student Name: ${item.name}</p>\
            <p "first">TechPoints: ${item.techPoints}</p>\
            <p "first">Life Points: ${item.lifePoints}</p>\
            <p "first">Status: active</p>\
        </div>`;
    }, 

    btnAll: function () {
        getInfo();
        function getInfo() {
            document.getElementById("info").innerHTML = laboratoria.map(getPerson);
        }
        // $('#info').append ( `<p> ${student[student.length -1].name} </p>`);   
    },

    btnfilter: function () {
        getInfo();

        function getInfo() {
            var arrayPer = laboratoria.filter(function (student) {
                return student.techPoints >= 70;
            });
            // getPerson(item, index);
            console.log(arrayPer);
            document.getElementById("info").innerHTML = arrayPer.map(getPerson);
        }
    },

    btnfilterDown: function () {
        getInfo();

        function getInfo() {
            var arrayPer = laboratoria.filter(function (student) {
                return student.techPoints <= 70;
            });
            // getPerson(item, index);
            console.log(arrayPer);
            document.getElementById("info").innerHTML = arrayPer.map(getPerson);
        }
    }

}
   