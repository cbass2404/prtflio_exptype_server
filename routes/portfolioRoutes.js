const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Project = mongoose.model('projects');

module.exports = (app) => {
    app.get('/api/projects', async (req, res) => {
        const projects = await Project.find();

        res.send(projects);
    });

    app.post('/api/projects', async (req, res) => {
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
            _user: 'kasdf',
        });

        try {
            const project = await Project.save(newProject);

            res.send(project);
        } catch (err) {
            res.status(401).send(err);
        }
    });

    app.delete('/api/projects', requireLogin, async (req, res) => {
        const { id } = req.body.id;

        try {
            const project = await Project.find({ id });

            await project.remove();

            res.send('success');
        } catch (err) {
            res.status(401).send(err);
        }
    });

    app.patch('/api/projects/:id', requireLogin, async (req, res) => {
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
            res.status(401).send(err);
        }
    });
};
