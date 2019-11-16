let skill = require('../models/skill')

module.exports = {
    index,
    new: newSkill,
    show,
    delete: deleteSkill,
    edit,
    update: updateSkill,
    create
}

function index(req, res) {
    res.render('skills/index', {
        skills: skill.getAll(),
        title: 'My Dev Skills'
    });
};

function show(req, res) {
    res.render('skills/show', {
        skill: skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1,
    });
}

function newSkill (req, res){
    res.render('skills/new');
}

function create(req, res) {
    skill.setOne(req.body.skill);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    skill.delete(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    let getSkill = skill.getOne(req.params.id);
    res.render('skills/edit', {
        skillItem: getSkill,
        id: req.params.id
    })
}

function updateSkill(req, res) {
    skill.update(req.params.id, req.body.skill);
    res.redirect(`/skills/${req.params.id}`);
}