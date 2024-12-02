var course = ["html", "css", "js", "react"]


console.log(`course = `, course)

// array.splice(index,deltecount,values)
course.splice(2,0,"Nodejs", "Java")
console.log(`course =`, course)


course.splice(3,2,"Python","Express", "mongo")
console.log(`course = `, course)