let skills = ['Cpp', 'Python',
    'HTML', 'CSS',
    'JS', 'NodeJS',
    'ExpressJS', 'MongoDB', 'React'
];

module.exports = {
    getAll,
    getOne,
    setOne,
    setAll,
    delete: deleteOne,
    update: updateOne,
}

function getAll() {
    return skills;
}

function getOne(index) {
    return skills[index];
}

function setOne(skill) {
    skills.push(skill);
}

function setAll() {
    arguments.array.forEach(element => {
        skills.push(element); 
    });
}

function deleteOne(id) {
    skills.splice(id, 1);
}

function updateOne(id, skill) {
    skills.splice(id, 1, skill);
}