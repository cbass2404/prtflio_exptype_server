const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const isAdmin = require('../middlewares/isAdmin');

const Project = mongoose.model('projects');

const error = { error: 'Something went wrong, try again later... :(' };

module.exports = (app) => {
    app.get('/api/projects', async (req, res) => {
        try {
            const projects = await Project.find();

            res.send(projects);
        } catch (err) {
            res.status(400).send({ error });
        }
    });

    app.post('/api/projects', requireLogin, isAdmin, async (req, res) => {
        const { title, lang, desc, url, repo, img, thumbImg, logo } = req.body;

        const newProject = new Project({
            title,
            lang,
            desc,
            url,
            repo,
            img,
            thumbImg,
            logo,
            _user: '109858114577478227581',
        });

        try {
            const project = await Project.save(newProject);

            res.send(project);
        } catch (err) {
            res.status(400).send({ error });
        }
    });

    app.delete('/api/projects', requireLogin, isAdmin, async (req, res) => {
        const { id } = req.body.id;

        try {
            const project = await Project.find({ id });

            await project.remove();

            res.send('success');
        } catch (err) {
            res.status(400).send({ error });
        }
    });

    app.patch('/api/projects/:id', requireLogin, isAdmin, async (req, res) => {
        const { id, title, lang, desc, url, repo, img, thumbImg, logo } =
            req.body;

        const updatedProject = {
            title,
            lang,
            desc,
            url,
            repo,
            img,
            thumbImg,
            logo,
            _user: req.user.id,
        };

        try {
            const project = await Project.updateOne({ id }, updatedProject);

            res.send(project);
        } catch (err) {
            res.status(400).send({ error });
        }
    });
};
